/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFeeManager, IFeeManagerInterface } from "../IFeeManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_totalFeePercent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_underwriterFeePercent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ambassadorFeePercent",
        type: "uint256",
      },
    ],
    name: "addNetwork",
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
      {
        internalType: "address",
        name: "_networkMember",
        type: "address",
      },
    ],
    name: "claimFees",
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
      {
        internalType: "address",
        name: "_networkMember",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_creditUsed",
        type: "uint256",
      },
    ],
    name: "collectFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFeeManager__factory {
  static readonly abi = _abi;
  static createInterface(): IFeeManagerInterface {
    return new utils.Interface(_abi) as IFeeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFeeManager {
    return new Contract(address, _abi, signerOrProvider) as IFeeManager;
  }
}