// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interface/IFeeManager.sol";
import "./interface/IPriceOracle.sol";
import "./interface/IUnderwriteManager.sol";
import "./interface/IProtocolRoles.sol";

contract FeeManager is IFeeManager, OwnableUpgradeable {
  // CONSTANTS
  uint32 private constant MAX_PPM = 1000000;
  bytes32 private constant UNDERWRITER = "UNDERWRITER";
  bytes32 private constant AMBASSADOR = "AMBASSADOR";
  bytes32 private constant NETWORK = "NETWORK";

  // STORAGE
  IERC20 public collateralToken;
  IPriceOracle public priceOracle;
  IUnderwriteManager public underwriteManager;
  IProtocolRoles public protocolRoles;
  mapping(address => uint256) accruedFees; 
  mapping(address => uint256) rewards;
  mapping(address => NetworkFees) networks;

  function initialize(
    address _collateralToken,
    address _priceOracle,
    address _underwriteManager, 
    address _protocolRoles) external virtual initializer {
    collateralToken = IERC20(_collateralToken);
    priceOracle = IPriceOracle(_priceOracle);
    underwriteManager = IUnderwriteManager(_underwriteManager);
    protocolRoles = IProtocolRoles(_protocolRoles);
    __Ownable_init();
  }

  function collectFees(address _networkAccount, address _network, uint256 _creditUsed) external override {
    uint256 totalFee = calculateTotalFee(_network, _creditUsed);
    if (!underwriteManager.isValidLTV(_networkAccount)) {
      uint256 underwriterFeePercent = networks[_network].roleFeePercent[UNDERWRITER];
      uint256 underwriterFee = (underwriterFeePercent * totalFee) / MAX_PPM;
      underwriteManager.depositCollateral(_networkAccount, underwriterFee);
    } else {
      accruedFees[_networkAccount] += totalFee;
    }
  }

  function claimFees(address _network, address _networkMember) external override {
    moveFeesToRewards(_network, _networkMember);
    collateralToken.transfer(msg.sender, rewards[msg.sender]);
  }

  function calculateTotalFee(address _network, uint256 _amount) public view returns(uint256) {
    return ((networks[_network].totalFeePercent * _amount) / MAX_PPM) * priceOracle.getPrice();
  }

  function moveFeesToRewards(address _network, address _networkAccount) private {
    uint256 totalFees = accruedFees[_networkAccount];
    if (totalFees == 0) { return; }
    NetworkFees storage network = networks[_network];
    IUnderwriteManager.CreditLine memory creditLine = underwriteManager.getCreditLine(_networkAccount);
    bytes32[] memory feeRoles = network.roles;
    for (uint256 i = 0; i < feeRoles.length; i++) {
      uint256 roleFeePercent = network.roleFeePercent[feeRoles[i]];
      if (feeRoles[i] == UNDERWRITER) {
        rewards[creditLine.underwriter] = (roleFeePercent * totalFees) / MAX_PPM;
      } else if (feeRoles[i] == AMBASSADOR) {
        rewards[creditLine.ambassador] = (roleFeePercent * totalFees) / MAX_PPM;
      } else {
        rewards[network.roleAddress[feeRoles[i]]] = (roleFeePercent * totalFees) / MAX_PPM;
      }
    }
  }

  function addNetwork(
    address _network, 
    uint256 _totalFeePercent,
    uint256 _underwriterFeePercent,
    uint256 _ambassadorFeePercent) external override {
    require(protocolRoles.isNetwork(_network), "FeeManager: Network is not registered");
    uint256 _protocolFeePercent = _underwriterFeePercent + _ambassadorFeePercent;
    require(_protocolFeePercent <= MAX_PPM, "FeeManager: Total fee percent greater than 100");
    NetworkFees storage network = networks[_network];
    network.totalFeePercent = _totalFeePercent;
    network.roles.push(UNDERWRITER);
    network.roles.push(AMBASSADOR);
    network.roles.push(NETWORK);
    network.roleFeePercent[UNDERWRITER] = _underwriterFeePercent;
    network.roleFeePercent[AMBASSADOR] = _ambassadorFeePercent;
    network.roleFeePercent[NETWORK] = MAX_PPM - _protocolFeePercent;
  }

  function removeNetwork(address _network) public {
    require(networks[_network].totalFeePercent > 0, "FeeManager: Network does not exist");
    delete networks[_network];
  }

  function updateNetworkRoleFee(address _network, bytes32 _role, uint256 _roleFeePercent) public {
    require(networks[_network].totalFeePercent > 0, "FeeManager: Network does not exist");
    NetworkFees storage network = networks[_network];
    bool isProtocolRole = _role == UNDERWRITER || _role == AMBASSADOR || _role == NETWORK;
    if (_roleFeePercent == 0 && !isProtocolRole) { // remove custom role
      removeRole(network, _role);
    } else if (network.roleFeePercent[_role] == 0 && !isProtocolRole) { // add custom role
      require(_roleFeePercent > 0, "FeeManager: Fee perecent must be greater than 0");
      require(_roleFeePercent <= network.roleFeePercent[NETWORK], "FeeManager: Invalid fee percent");
      network.roles.push(_role);
    }
    if (_roleFeePercent > network.roleFeePercent[_role]) {
      uint256 feeIncrease = _roleFeePercent - network.roleFeePercent[_role];
      require(feeIncrease <= network.roleFeePercent[NETWORK], "FeeManager: Invalid fee percent");
      network.roleFeePercent[_role] = _roleFeePercent;
      network.roleFeePercent[NETWORK] -= feeIncrease;
    } else {
      uint256 feeDecrease = network.roleFeePercent[_role] - _roleFeePercent;
      network.roleFeePercent[_role] = _roleFeePercent;
      network.roleFeePercent[NETWORK] += feeDecrease;
    }
  }

  function removeRole(NetworkFees storage _network, bytes32 _role) private {
    for (uint256 i = 0; i < _network.roles.length; i++) {
      if (_network.roles[i] == _role) {
        _network.roles[i] = _network.roles[_network.roles.length - 1];
        break;
      }
    }
    _network.roles.pop();
  }
}