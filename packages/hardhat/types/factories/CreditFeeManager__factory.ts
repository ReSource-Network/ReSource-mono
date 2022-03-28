/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CreditFeeManager,
  CreditFeeManagerInterface,
} from "../CreditFeeManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "network",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalFee",
        type: "uint256",
      },
    ],
    name: "FeesCollected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "underwriter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    name: "PoolRewardsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "underwriter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalStaked",
        type: "uint256",
      },
    ],
    name: "UnderwriterRewardsStaked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_transactionAmount",
        type: "uint256",
      },
    ],
    name: "calculateFees",
    outputs: [
      {
        internalType: "uint256",
        name: "creditFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "collateralToken",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
      {
        internalType: "address",
        name: "_networkMember",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_transactionAmount",
        type: "uint256",
      },
    ],
    name: "collectFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creditManager",
    outputs: [
      {
        internalType: "contract ICreditManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creditRequest",
    outputs: [
      {
        internalType: "contract ICreditRequest",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creditRoles",
    outputs: [
      {
        internalType: "contract ICreditRoles",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_networkMembers",
        type: "address[]",
      },
    ],
    name: "distributeFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
    ],
    name: "getAccruedFees",
    outputs: [
      {
        internalType: "uint256",
        name: "totalFees",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCollateralToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
      {
        internalType: "address",
        name: "_networkMember",
        type: "address",
      },
    ],
    name: "getUnderwriterPoolStakePercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_creditRoles",
        type: "address",
      },
      {
        internalType: "address",
        name: "_creditRequest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_underwriterPercent",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceOracle",
    outputs: [
      {
        internalType: "contract IPriceOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underwriterFeePercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
    ],
    name: "updateUnderwriterFeePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613132806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806396423663116100a2578063e00efe4a11610071578063e00efe4a146102ab578063ed04b842146102c7578063f2fde38b146102e5578063f7013ef614610301578063fdd6eaff1461031d57610116565b80639642366314610233578063b2016bd414610251578063c12c21c01461026f578063db3f00fe1461028d57610116565b806379350a8f116100e957806379350a8f1461017b578063801c2d1c146101ab5780638980f11f146101c95780638da5cb5b146101e55780638f3430171461020357610116565b80632630c12f1461011b5780632eb0d5151461013957806330a758ce14610155578063715018a614610171575b600080fd5b61012361034d565b60405161013091906127f5565b60405180910390f35b610153600480360381019061014e9190612297565b610373565b005b61016f600480360381019061016a91906123e9565b6107aa565b005b6101796108f7565b005b610195600480360381019061019091906122f3565b61097f565b6040516101a29190612992565b60405180910390f35b6101b3610a3a565b6040516101c09190612992565b60405180910390f35b6101e360048036038101906101de91906122f3565b610a40565b005b6101ed610b59565b6040516101fa91906126ae565b60405180910390f35b61021d60048036038101906102189190612333565b610b83565b60405161022a9190612992565b60405180910390f35b61023b610c52565b60405161024891906126ae565b60405180910390f35b610259610c7c565b60405161026691906127da565b60405180910390f35b610277610ca2565b6040516102849190612789565b60405180910390f35b610295610cc8565b6040516102a291906127bf565b60405180910390f35b6102c560048036038101906102c09190612244565b610cee565b005b6102cf61102f565b6040516102dc91906127a4565b60405180910390f35b6102ff60048036038101906102fa919061212f565b611055565b005b61031b600480360381019061031691906121c9565b61114d565b005b61033760048036038101906103329190612189565b611477565b6040516103449190612992565b60405180910390f35b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60005b81518110156107a4576000606b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008484815181106103d5576103d4612d16565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000606b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008585815181106104705761046f612d16565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1f094a88686868151811061050a57610509612d16565b5b60200260200101516040518363ffffffff1660e01b815260040161052f9291906126c9565b602060405180830381600087803b15801561054957600080fd5b505af115801561055d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610581919061215c565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105c0575050506107a6565b6000606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302d7bbff8787878151811061061457610613612d16565b5b60200260200101516040518363ffffffff1660e01b81526004016106399291906126c9565b6040805180830381600087803b15801561065257600080fd5b505af1158015610666573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068a91906123bc565b60000151905060006106b9878787815181106106a9576106a8612d16565b5b602002602001015184868861171c565b9050600081111561078d578173ffffffffffffffffffffffffffffffffffffffff1663b66503cf606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b8152600401610721929190612729565b600060405180830381600087803b15801561073b57600080fd5b505af115801561074f573d6000803e3d6000fd5b505050507faad2b941e169592ea3fbf8326ab78d4cb23a806827ab06ac4d86fc637522e72c8282604051610784929190612729565b60405180910390a15b50505050808061079c90612c6f565b915050610376565b505b5050565b606860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632ccd3ce0336040518263ffffffff1660e01b815260040161080591906126ae565b60206040518083038186803b15801561081d57600080fd5b505afa158015610831573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610855919061238f565b610894576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088b90612892565b60405180910390fd5b620f424063ffffffff1681111580156108ae575060008110155b6108ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e490612852565b60405180910390fd5b80606a8190555050565b6108ff611ab3565b73ffffffffffffffffffffffffffffffffffffffff1661091d610b59565b73ffffffffffffffffffffffffffffffffffffffff1614610973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096a906128f2565b60405180910390fd5b61097d6000611abb565b565b6000606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dbac960c84606a54856040518463ffffffff1660e01b81526004016109e293929190612752565b60206040518083038186803b1580156109fa57600080fd5b505afa158015610a0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a329190612416565b905092915050565b606a5481565b606860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632ccd3ce0336040518263ffffffff1660e01b8152600401610a9b91906126ae565b60206040518083038186803b158015610ab357600080fd5b505afa158015610ac7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aeb919061238f565b610b2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2190612892565b60405180910390fd5b610b5533828473ffffffffffffffffffffffffffffffffffffffff16611b819092919063ffffffff16565b5050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600090505b8351811015610c4b57606b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000858381518110610be857610be7612d16565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482610c369190612a30565b91508080610c4390612c6f565b915050610b8b565b5092915050565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634d610b58336040518263ffffffff1660e01b8152600401610d4991906126ae565b60206040518083038186803b158015610d6157600080fd5b505afa158015610d75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d99919061238f565b610dd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcf90612912565b60405180910390fd5b6000606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dbac960c85606a54856040518463ffffffff1660e01b8152600401610e3b93929190612752565b60206040518083038186803b158015610e5357600080fd5b505afa158015610e67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8b9190612416565b9050610edc833083606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611c07909392919063ffffffff16565b606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f8a1f0a88585856040518463ffffffff1660e01b8152600401610f3b939291906126f2565b600060405180830381600087803b158015610f5557600080fd5b505af1158015610f69573d6000803e3d6000fd5b5050505080606b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f9bcb6d1f38f6800906185471a11ede9a8e16200853225aa62558db6076490f2d848483604051611021939291906126f2565b60405180910390a150505050565b606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61105d611ab3565b73ffffffffffffffffffffffffffffffffffffffff1661107b610b59565b73ffffffffffffffffffffffffffffffffffffffff16146110d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c8906128f2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611141576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113890612872565b60405180910390fd5b61114a81611abb565b50565b600060019054906101000a900460ff166111755760008054906101000a900460ff161561117e565b61117d611c90565b5b6111bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b4906128d2565b60405180910390fd5b60008060019054906101000a900460ff16159050801561120d576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611215611ca1565b85606660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084606760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663964236636040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561130157600080fd5b505af1158015611315573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611339919061215c565b606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083606860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082606960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620f424063ffffffff16821115611447576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143e90612832565b60405180910390fd5b81606a81905550801561146f5760008060016101000a81548160ff0219169083151502179055505b505050505050565b600080606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302d7bbff85856040518363ffffffff1660e01b81526004016114d79291906126c9565b6040805180830381600087803b1580156114f057600080fd5b505af1158015611504573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061152891906123bc565b6000015190506000606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1f094a886866040518363ffffffff1660e01b815260040161158d9291906126c9565b602060405180830381600087803b1580156115a757600080fd5b505af11580156115bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115df919061215c565b905060008273ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b815260040161161c91906126ae565b60206040518083038186803b15801561163457600080fd5b505afa158015611648573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061166c9190612416565b905060008373ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156116b657600080fd5b505afa1580156116ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ee9190612416565b9050620f424063ffffffff1682826117069190612a86565b6117109190612ab7565b94505050505092915050565b6000606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe13f8b287866040518363ffffffff1660e01b815260040161177b9291906126c9565b602060405180830381600087803b15801561179557600080fd5b505af11580156117a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cd919061238f565b156117da57819050611aaa565b6000606760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635ebb931388886040518363ffffffff1660e01b81526004016118399291906126c9565b602060405180830381600087803b15801561185357600080fd5b505af1158015611867573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061188b9190612416565b9050600081141561189f5782915050611aaa565b828111156119a3576118f48484606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611b819092919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff16632ee4090885856040518363ffffffff1660e01b815260040161192f929190612729565b600060405180830381600087803b15801561194957600080fd5b505af115801561195d573d6000803e3d6000fd5b505050507fdab4bcd902dc9b50236424df8ec3dfd7b3101ae643b0f6a91f7f7ec2f8fe981c8484604051611992929190612729565b60405180910390a160009250611aa5565b6119f08482606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611b819092919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff16632ee4090885836040518363ffffffff1660e01b8152600401611a2b929190612729565b600060405180830381600087803b158015611a4557600080fd5b505af1158015611a59573d6000803e3d6000fd5b505050507fdab4bcd902dc9b50236424df8ec3dfd7b3101ae643b0f6a91f7f7ec2f8fe981c8482604051611a8e929190612729565b60405180910390a18083611aa29190612b11565b92505b829150505b95945050505050565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611c028363a9059cbb60e01b8484604051602401611ba0929190612729565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611cfa565b505050565b611c8a846323b872dd60e01b858585604051602401611c28939291906126f2565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611cfa565b50505050565b6000611c9b30611dc1565b15905090565b600060019054906101000a900460ff16611cf0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce790612952565b60405180910390fd5b611cf8611de4565b565b6000611d5c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e459092919063ffffffff16565b9050600081511115611dbc5780806020019051810190611d7c919061238f565b611dbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611db290612972565b60405180910390fd5b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611e33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e2a90612952565b60405180910390fd5b611e43611e3e611ab3565b611abb565b565b6060611e548484600085611e5d565b90509392505050565b606082471015611ea2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e99906128b2565b60405180910390fd5b611eab85611dc1565b611eea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ee190612932565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f139190612697565b60006040518083038185875af1925050503d8060008114611f50576040519150601f19603f3d011682016040523d82523d6000602084013e611f55565b606091505b5091509150611f65828286611f71565b92505050949350505050565b60608315611f8157829050611fd1565b600083511115611f945782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fc89190612810565b60405180910390fd5b9392505050565b6000611feb611fe6846129d2565b6129ad565b9050808382526020820190508285602086028201111561200e5761200d612d7e565b5b60005b8581101561203e57816120248882612048565b845260208401935060208301925050600181019050612011565b5050509392505050565b600081359050612057816130b7565b92915050565b60008151905061206c816130b7565b92915050565b600082601f83011261208757612086612d74565b5b8135612097848260208601611fd8565b91505092915050565b6000815190506120af816130ce565b92915050565b6000604082840312156120cb576120ca612d79565b5b6120d560406129ad565b905060006120e58482850161205d565b60008301525060206120f98482850161211a565b60208301525092915050565b600081359050612114816130e5565b92915050565b600081519050612129816130e5565b92915050565b60006020828403121561214557612144612d88565b5b600061215384828501612048565b91505092915050565b60006020828403121561217257612171612d88565b5b60006121808482850161205d565b91505092915050565b600080604083850312156121a05761219f612d88565b5b60006121ae85828601612048565b92505060206121bf85828601612048565b9150509250929050565b600080600080600060a086880312156121e5576121e4612d88565b5b60006121f388828901612048565b955050602061220488828901612048565b945050604061221588828901612048565b935050606061222688828901612048565b925050608061223788828901612105565b9150509295509295909350565b60008060006060848603121561225d5761225c612d88565b5b600061226b86828701612048565b935050602061227c86828701612048565b925050604061228d86828701612105565b9150509250925092565b600080604083850312156122ae576122ad612d88565b5b60006122bc85828601612048565b925050602083013567ffffffffffffffff8111156122dd576122dc612d83565b5b6122e985828601612072565b9150509250929050565b6000806040838503121561230a57612309612d88565b5b600061231885828601612048565b925050602061232985828601612105565b9150509250929050565b6000806040838503121561234a57612349612d88565b5b600083013567ffffffffffffffff81111561236857612367612d83565b5b61237485828601612072565b925050602061238585828601612048565b9150509250929050565b6000602082840312156123a5576123a4612d88565b5b60006123b3848285016120a0565b91505092915050565b6000604082840312156123d2576123d1612d88565b5b60006123e0848285016120b5565b91505092915050565b6000602082840312156123ff576123fe612d88565b5b600061240d84828501612105565b91505092915050565b60006020828403121561242c5761242b612d88565b5b600061243a8482850161211a565b91505092915050565b61244c81612b45565b82525050565b600061245d826129fe565b6124678185612a14565b9350612477818560208601612c0b565b80840191505092915050565b61248c81612b8d565b82525050565b61249b81612b9f565b82525050565b6124aa81612bb1565b82525050565b6124b981612bc3565b82525050565b6124c881612bd5565b82525050565b60006124d982612a09565b6124e38185612a1f565b93506124f3818560208601612c0b565b6124fc81612d8d565b840191505092915050565b6000612514603c83612a1f565b915061251f82612d9e565b604082019050919050565b6000612537602583612a1f565b915061254282612ded565b604082019050919050565b600061255a602683612a1f565b915061256582612e3c565b604082019050919050565b600061257d602f83612a1f565b915061258882612e8b565b604082019050919050565b60006125a0602683612a1f565b91506125ab82612eda565b604082019050919050565b60006125c3602e83612a1f565b91506125ce82612f29565b604082019050919050565b60006125e6602083612a1f565b91506125f182612f78565b602082019050919050565b6000612609602983612a1f565b915061261482612fa1565b604082019050919050565b600061262c601d83612a1f565b915061263782612ff0565b602082019050919050565b600061264f602b83612a1f565b915061265a82613019565b604082019050919050565b6000612672602a83612a1f565b915061267d82613068565b604082019050919050565b61269181612b83565b82525050565b60006126a38284612452565b915081905092915050565b60006020820190506126c36000830184612443565b92915050565b60006040820190506126de6000830185612443565b6126eb6020830184612443565b9392505050565b60006060820190506127076000830186612443565b6127146020830185612443565b6127216040830184612688565b949350505050565b600060408201905061273e6000830185612443565b61274b6020830184612688565b9392505050565b60006060820190506127676000830186612443565b6127746020830185612688565b6127816040830184612688565b949350505050565b600060208201905061279e6000830184612483565b92915050565b60006020820190506127b96000830184612492565b92915050565b60006020820190506127d460008301846124a1565b92915050565b60006020820190506127ef60008301846124b0565b92915050565b600060208201905061280a60008301846124bf565b92915050565b6000602082019050818103600083015261282a81846124ce565b905092915050565b6000602082019050818103600083015261284b81612507565b9050919050565b6000602082019050818103600083015261286b8161252a565b9050919050565b6000602082019050818103600083015261288b8161254d565b9050919050565b600060208201905081810360008301526128ab81612570565b9050919050565b600060208201905081810360008301526128cb81612593565b9050919050565b600060208201905081810360008301526128eb816125b6565b9050919050565b6000602082019050818103600083015261290b816125d9565b9050919050565b6000602082019050818103600083015261292b816125fc565b9050919050565b6000602082019050818103600083015261294b8161261f565b9050919050565b6000602082019050818103600083015261296b81612642565b9050919050565b6000602082019050818103600083015261298b81612665565b9050919050565b60006020820190506129a76000830184612688565b92915050565b60006129b76129c8565b90506129c38282612c3e565b919050565b6000604051905090565b600067ffffffffffffffff8211156129ed576129ec612d45565b5b602082029050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000612a3b82612b83565b9150612a4683612b83565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612a7b57612a7a612cb8565b5b828201905092915050565b6000612a9182612b83565b9150612a9c83612b83565b925082612aac57612aab612ce7565b5b828204905092915050565b6000612ac282612b83565b9150612acd83612b83565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612b0657612b05612cb8565b5b828202905092915050565b6000612b1c82612b83565b9150612b2783612b83565b925082821015612b3a57612b39612cb8565b5b828203905092915050565b6000612b5082612b63565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612b9882612be7565b9050919050565b6000612baa82612be7565b9050919050565b6000612bbc82612be7565b9050919050565b6000612bce82612be7565b9050919050565b6000612be082612be7565b9050919050565b6000612bf282612bf9565b9050919050565b6000612c0482612b63565b9050919050565b60005b83811015612c29578082015181840152602081019050612c0e565b83811115612c38576000848401525b50505050565b612c4782612d8d565b810181811067ffffffffffffffff82111715612c6657612c65612d45565b5b80604052505050565b6000612c7a82612b83565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612cad57612cac612cb8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4372656469744665654d616e616765723a20756e64657277726974657220706560008201527f7263656e74206d757374206265206c657373207468616e203130302500000000602082015250565b7f4372656469744665654d616e616765723a20696e76616c69642066656520706560008201527f7263656e74000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4372656469744665654d616e616765723a2043616c6c6572206973206e6f742060008201527f637265646974206f70657261746f720000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4372656469744665654d616e616765723a2043616c6c6572206973206e6f742060008201527f61206e6574776f726b0000000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6130c081612b45565b81146130cb57600080fd5b50565b6130d781612b57565b81146130e257600080fd5b50565b6130ee81612b83565b81146130f957600080fd5b5056fea2646970667358221220780c7f2940e9bb222a26c4fc1ac9461dddac10663b6c0d58b50b7ab8206cf53e64736f6c63430008070033";

export class CreditFeeManager__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CreditFeeManager> {
    return super.deploy(overrides || {}) as Promise<CreditFeeManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CreditFeeManager {
    return super.attach(address) as CreditFeeManager;
  }
  connect(signer: Signer): CreditFeeManager__factory {
    return super.connect(signer) as CreditFeeManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreditFeeManagerInterface {
    return new utils.Interface(_abi) as CreditFeeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreditFeeManager {
    return new Contract(address, _abi, signerOrProvider) as CreditFeeManager;
  }
}
