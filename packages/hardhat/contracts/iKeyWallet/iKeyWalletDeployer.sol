// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./iKeyMultiSig.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";


/// @title MultiSigWalletRegistry - Allows owner to added and remove multiSigWallet contracts from the registry.
/// @author Bridger Zoske - <bridger@resourcenetwork.co>
contract iKeyWalletDeployer is OwnableUpgradeable {
    event WalletDeployed(address multiSig);

    function initialize() external initializer {
        __Ownable_init();
    }

    function deployWallet(
        address[] memory _clients,
        address[] memory _guardians, 
        address _coSigner,
        uint256 _required) public onlyOwner returns (address) {
        iKeyMultiSig multiSig = new iKeyMultiSig();
        multiSig.initialize(_clients, _guardians, _coSigner, _required);
        multiSig.transferOwnership(msg.sender);
        return address(multiSig);
    }
}