pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";


/// @title ERC20SOUL - An ERC20 extension that enables the transfer of
/// tokens alongside locking periods that can be applied to subsets of
/// the total transfer amount. This implementation also allows the owner
/// to specify staking contract addresses that locked addresses can 
/// interact with.
/// @author Bridger Zoske - <bridger@resourcenetwork.co>
contract ERC20SOUL is ERC20Upgradeable, OwnableUpgradeable {
    /*
     *  Events
     */
    event LockedTransfer(
        Lock lock,
        address sender,
        address recipient
    );

    /*
     *  Storage
     */
    mapping (address => bool) public isStakableContract;
    mapping(address => Lock) public locks;

    struct Lock {
        uint256 amount;
        Schedule[] schedules;
    }

    struct Schedule {
        uint256 amount;
        uint256 expiration;
    }

    /*
     *  Modifiers
     */
    modifier validLock(Lock calldata _lock) {
        uint256 totalLocked = 0;
        for (uint256 i = 0; i < _lock.schedules.length; i++) {
            totalLocked += _lock.schedules[i].amount;
        }
        require(totalLocked == _lock.amount, "Invalid Lock");
        _;
    }

    /*
     * Public functions
     */
    function initializeERC20SOUL(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply,
        address[] calldata _stakableContracts
    ) public virtual initializer {
        __ERC20_init(name_, symbol_);
        __Ownable_init();
        _mint(msg.sender, initialSupply);
        for (uint256 i = 0; i < _stakableContracts.length; i++) {
            require(_stakableContracts[i] != address(0), "invalid stakable contract address");
            isStakableContract[_stakableContracts[i]] = true;
        }
    }

    function transferWithLock(
        address _to,
        Lock calldata _lock
    ) validLock(_lock) external {
        super._transfer(msg.sender, _to, _lock.amount);
        Lock storage lock = locks[_to];
        lock.amount += _lock.amount;
        for (uint256 i = 0; i < _lock.schedules.length; i++) {
            lock.schedules.push(Schedule(_lock.schedules[i].amount, _lock.schedules[i].expiration + block.timestamp));
        }
        emit LockedTransfer(_lock, msg.sender, _to);
    }

    function updateStakableContract(address _contract, bool _isStakable) onlyOwner() external {
        isStakableContract[_contract] = _isStakable;
    }

    /*
     * Internal functions
     */
    function _transfer(
        address _from,
        address _to,
        uint256 _amount
    ) internal override {
        _verifyLock(_from, _to, _amount);
        super._transfer(_from, _to, _amount);
    }

    function _verifyLock(address _from, address _to, uint256 _amount) internal {
        Lock storage lock = locks[_from];
        if (lock.amount == 0 || isStakableContract[_to]) {
            return;
        }
        uint256 unlockedAmount = 0;
        for (uint256 i = 0; i < lock.schedules.length; i++) {
            if (block.timestamp >= lock.schedules[i].expiration) {
                unlockedAmount += lock.schedules[i].amount;
            }
        }
        require(unlockedAmount + balanceOf(_from) - lock.amount >= _amount, "Insufficient unlocked funds");
        if (unlockedAmount == lock.amount) { 
            delete locks[_from];
        }
    }
}