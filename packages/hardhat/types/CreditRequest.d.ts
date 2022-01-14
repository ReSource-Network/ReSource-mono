/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CreditRequestInterface extends ethers.utils.Interface {
  functions: {
    "acceptRequest(address)": FunctionFragment;
    "approveRequest(address)": FunctionFragment;
    "calculateRequestCollateral(address)": FunctionFragment;
    "createRequest(address,uint256,address)": FunctionFragment;
    "deleteRequest(address)": FunctionFragment;
    "getCreditRequest(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requests(address)": FunctionFragment;
    "roles()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "underwriteManager()": FunctionFragment;
    "updateRequest(address,uint256,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptRequest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approveRequest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRequestCollateral",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createRequest",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteRequest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditRequest",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "requests", values: [string]): string;
  encodeFunctionData(functionFragment: "roles", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "underwriteManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateRequest",
    values: [string, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRequestCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underwriteManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRequest",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class CreditRequest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CreditRequestInterface;

  functions: {
    acceptRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateRequestCollateral(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createRequest(
      _counterparty: string,
      _creditLimit: BigNumberish,
      _networkToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCreditRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _rolesAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requests(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, string, BigNumber] & {
        approved: boolean;
        ambassador: string;
        networkToken: string;
        creditLimit: BigNumber;
      }
    >;

    roles(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underwriteManager(overrides?: CallOverrides): Promise<[string]>;

    updateRequest(
      _counterparty: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptRequest(
    _counterparty: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveRequest(
    _counterparty: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateRequestCollateral(
    _counterparty: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createRequest(
    _counterparty: string,
    _creditLimit: BigNumberish,
    _networkToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteRequest(
    _counterparty: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCreditRequest(
    _counterparty: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _rolesAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requests(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, string, BigNumber] & {
      approved: boolean;
      ambassador: string;
      networkToken: string;
      creditLimit: BigNumber;
    }
  >;

  roles(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underwriteManager(overrides?: CallOverrides): Promise<string>;

  updateRequest(
    _counterparty: string,
    _creditLimit: BigNumberish,
    _approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptRequest(
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<void>;

    approveRequest(
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<void>;

    calculateRequestCollateral(
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createRequest(
      _counterparty: string,
      _creditLimit: BigNumberish,
      _networkToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteRequest(
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getCreditRequest(
      _counterparty: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, string, BigNumber] & {
        approved: boolean;
        ambassador: string;
        networkToken: string;
        creditLimit: BigNumber;
      }
    >;

    initialize(_rolesAddress: string, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requests(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, string, BigNumber] & {
        approved: boolean;
        ambassador: string;
        networkToken: string;
        creditLimit: BigNumber;
      }
    >;

    roles(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    underwriteManager(overrides?: CallOverrides): Promise<string>;

    updateRequest(
      _counterparty: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    acceptRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateRequestCollateral(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createRequest(
      _counterparty: string,
      _creditLimit: BigNumberish,
      _networkToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCreditRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _rolesAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requests(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    roles(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underwriteManager(overrides?: CallOverrides): Promise<BigNumber>;

    updateRequest(
      _counterparty: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateRequestCollateral(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createRequest(
      _counterparty: string,
      _creditLimit: BigNumberish,
      _networkToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCreditRequest(
      _counterparty: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _rolesAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requests(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underwriteManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateRequest(
      _counterparty: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}