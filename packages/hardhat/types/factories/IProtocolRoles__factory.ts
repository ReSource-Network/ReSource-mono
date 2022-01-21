/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IProtocolRoles,
  IProtocolRolesInterface,
} from "../IProtocolRoles";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ambassador",
        type: "address",
      },
    ],
    name: "grantAmbassador",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
    ],
    name: "grantNetwork",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underwriter",
        type: "address",
      },
    ],
    name: "grantUnderwriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ambassador",
        type: "address",
      },
    ],
    name: "isAmbassador",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    ],
    name: "isNetwork",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underwriter",
        type: "address",
      },
    ],
    name: "isUnderwriter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ambassador",
        type: "address",
      },
    ],
    name: "revokeAmbassador",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
    ],
    name: "revokeNetwork",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underwriter",
        type: "address",
      },
    ],
    name: "revokeUnderwriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IProtocolRoles__factory {
  static readonly abi = _abi;
  static createInterface(): IProtocolRolesInterface {
    return new utils.Interface(_abi) as IProtocolRolesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProtocolRoles {
    return new Contract(address, _abi, signerOrProvider) as IProtocolRoles;
  }
}
