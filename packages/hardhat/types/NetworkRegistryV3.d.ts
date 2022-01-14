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

interface NetworkRegistryV3Interface extends ethers.utils.Interface {
  functions: {
    "addAmbassador(address)": FunctionFragment;
    "addMembers(address[])": FunctionFragment;
    "addOperator(address)": FunctionFragment;
    "deployAndAddWallet(address[],address[],address,uint256)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "isMember(address)": FunctionFragment;
    "isValidOperator(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeAmbassador(address)": FunctionFragment;
    "removeMember(address)": FunctionFragment;
    "removeOperator(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "roles()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAmbassador",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addMembers",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "addOperator", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deployAndAddWallet",
    values: [string[], string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "isMember", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isValidOperator",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAmbassador",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMember",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "roles", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAmbassador",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addMembers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployAndAddWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isMember", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAmbassador",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class NetworkRegistryV3 extends BaseContract {
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

  interface: NetworkRegistryV3Interface;

  functions: {
    addAmbassador(
      _ambassador: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addMembers(
      _members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployAndAddWallet(
      clients: string[],
      guardians: string[],
      coSigner: string,
      required: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _roles: string,
      _walletDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isMember(_member: string, overrides?: CallOverrides): Promise<[boolean]>;

    isValidOperator(
      _operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeAmbassador(
      _ambassador: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeMember(
      member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    roles(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAmbassador(
    _ambassador: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addMembers(
    _members: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addOperator(
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployAndAddWallet(
    clients: string[],
    guardians: string[],
    coSigner: string,
    required: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _roles: string,
    _walletDeployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isMember(_member: string, overrides?: CallOverrides): Promise<boolean>;

  isValidOperator(
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeAmbassador(
    _ambassador: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeMember(
    member: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeOperator(
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  roles(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAmbassador(
      _ambassador: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addMembers(_members: string[], overrides?: CallOverrides): Promise<void>;

    addOperator(operator: string, overrides?: CallOverrides): Promise<void>;

    deployAndAddWallet(
      clients: string[],
      guardians: string[],
      coSigner: string,
      required: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _roles: string,
      _walletDeployer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isMember(_member: string, overrides?: CallOverrides): Promise<boolean>;

    isValidOperator(
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeAmbassador(
      _ambassador: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeMember(member: string, overrides?: CallOverrides): Promise<void>;

    removeOperator(operator: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    roles(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
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
  };

  estimateGas: {
    addAmbassador(
      _ambassador: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addMembers(
      _members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployAndAddWallet(
      clients: string[],
      guardians: string[],
      coSigner: string,
      required: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _roles: string,
      _walletDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isMember(_member: string, overrides?: CallOverrides): Promise<BigNumber>;

    isValidOperator(
      _operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeAmbassador(
      _ambassador: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeMember(
      member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    roles(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAmbassador(
      _ambassador: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addMembers(
      _members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployAndAddWallet(
      clients: string[],
      guardians: string[],
      coSigner: string,
      required: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _roles: string,
      _walletDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isMember(
      _member: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidOperator(
      _operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAmbassador(
      _ambassador: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeMember(
      member: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    roles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}