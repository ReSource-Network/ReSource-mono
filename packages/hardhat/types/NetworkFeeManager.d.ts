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

interface NetworkFeeManagerInterface extends ethers.utils.Interface {
  functions: {
    "calculateAmbassadorRewards(address[])": FunctionFragment;
    "calculateFees(uint256)": FunctionFragment;
    "calculateNetworkRewards(address[])": FunctionFragment;
    "claimRewards(address[])": FunctionFragment;
    "collectFees(address,uint256)": FunctionFragment;
    "creditFeeManager()": FunctionFragment;
    "creditManager()": FunctionFragment;
    "distributeFees(address[])": FunctionFragment;
    "feeToken()": FunctionFragment;
    "initialize(address,address,address,uint256,uint256)": FunctionFragment;
    "networkRoles()": FunctionFragment;
    "owner()": FunctionFragment;
    "recoverERC20(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setNetwork(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateAmbassadorFeePercent(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateAmbassadorRewards",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateFees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateNetworkRewards",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "collectFees",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creditFeeManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributeFees",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "feeToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "networkRoles",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverERC20",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setNetwork", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAmbassadorFeePercent",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateAmbassadorRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateNetworkRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditFeeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "networkRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setNetwork", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAmbassadorFeePercent",
    data: BytesLike
  ): Result;

  events: {
    "AmbassadorRewardsUpdated(address,uint256)": EventFragment;
    "FeesCollected(address,uint256)": EventFragment;
    "NetworkRewardsUpdated(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RewardsClaimed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AmbassadorRewardsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesCollected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NetworkRewardsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
}

export type AmbassadorRewardsUpdatedEvent = TypedEvent<
  [string, BigNumber] & { ambassador: string; totalRewards: BigNumber }
>;

export type FeesCollectedEvent = TypedEvent<
  [string, BigNumber] & { member: string; totalFee: BigNumber }
>;

export type NetworkRewardsUpdatedEvent = TypedEvent<
  [BigNumber] & { totalRewards: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RewardsClaimedEvent = TypedEvent<
  [string, BigNumber] & { claimer: string; totalRewards: BigNumber }
>;

export class NetworkFeeManager extends BaseContract {
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

  interface: NetworkFeeManagerInterface;

  functions: {
    calculateAmbassadorRewards(
      _members: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalRewards: BigNumber }>;

    calculateFees(
      _transactionAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateNetworkRewards(
      _members: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalRewards: BigNumber }>;

    claimRewards(
      _members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collectFees(
      _member: string,
      _transactionAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    creditFeeManager(overrides?: CallOverrides): Promise<[string]>;

    creditManager(overrides?: CallOverrides): Promise<[string]>;

    distributeFees(
      _members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeToken(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _creditFeeManager: string,
      _creditManager: string,
      _networkRoles: string,
      _totalFeePercent: BigNumberish,
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    networkRoles(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNetwork(
      _network: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAmbassadorFeePercent(
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calculateAmbassadorRewards(
    _members: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateFees(
    _transactionAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateNetworkRewards(
    _members: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimRewards(
    _members: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collectFees(
    _member: string,
    _transactionAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  creditFeeManager(overrides?: CallOverrides): Promise<string>;

  creditManager(overrides?: CallOverrides): Promise<string>;

  distributeFees(
    _members: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeToken(overrides?: CallOverrides): Promise<string>;

  initialize(
    _creditFeeManager: string,
    _creditManager: string,
    _networkRoles: string,
    _totalFeePercent: BigNumberish,
    _ambassadorFeePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  networkRoles(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  recoverERC20(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNetwork(
    _network: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAmbassadorFeePercent(
    _ambassadorFeePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateAmbassadorRewards(
      _members: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateFees(
      _transactionAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateNetworkRewards(
      _members: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewards(_members: string[], overrides?: CallOverrides): Promise<void>;

    collectFees(
      _member: string,
      _transactionAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    creditFeeManager(overrides?: CallOverrides): Promise<string>;

    creditManager(overrides?: CallOverrides): Promise<string>;

    distributeFees(
      _members: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    feeToken(overrides?: CallOverrides): Promise<string>;

    initialize(
      _creditFeeManager: string,
      _creditManager: string,
      _networkRoles: string,
      _totalFeePercent: BigNumberish,
      _ambassadorFeePercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    networkRoles(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setNetwork(_network: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAmbassadorFeePercent(
      _ambassadorFeePercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AmbassadorRewardsUpdated(address,uint256)"(
      ambassador?: null,
      totalRewards?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { ambassador: string; totalRewards: BigNumber }
    >;

    AmbassadorRewardsUpdated(
      ambassador?: null,
      totalRewards?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { ambassador: string; totalRewards: BigNumber }
    >;

    "FeesCollected(address,uint256)"(
      member?: null,
      totalFee?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { member: string; totalFee: BigNumber }
    >;

    FeesCollected(
      member?: null,
      totalFee?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { member: string; totalFee: BigNumber }
    >;

    "NetworkRewardsUpdated(uint256)"(
      totalRewards?: null
    ): TypedEventFilter<[BigNumber], { totalRewards: BigNumber }>;

    NetworkRewardsUpdated(
      totalRewards?: null
    ): TypedEventFilter<[BigNumber], { totalRewards: BigNumber }>;

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

    "RewardsClaimed(address,uint256)"(
      claimer?: null,
      totalRewards?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { claimer: string; totalRewards: BigNumber }
    >;

    RewardsClaimed(
      claimer?: null,
      totalRewards?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { claimer: string; totalRewards: BigNumber }
    >;
  };

  estimateGas: {
    calculateAmbassadorRewards(
      _members: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateFees(
      _transactionAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateNetworkRewards(
      _members: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewards(
      _members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collectFees(
      _member: string,
      _transactionAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    creditFeeManager(overrides?: CallOverrides): Promise<BigNumber>;

    creditManager(overrides?: CallOverrides): Promise<BigNumber>;

    distributeFees(
      _members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeToken(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _creditFeeManager: string,
      _creditManager: string,
      _networkRoles: string,
      _totalFeePercent: BigNumberish,
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    networkRoles(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNetwork(
      _network: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAmbassadorFeePercent(
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateAmbassadorRewards(
      _members: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateFees(
      _transactionAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateNetworkRewards(
      _members: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      _members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collectFees(
      _member: string,
      _transactionAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    creditFeeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributeFees(
      _members: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _creditFeeManager: string,
      _creditManager: string,
      _networkRoles: string,
      _totalFeePercent: BigNumberish,
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    networkRoles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNetwork(
      _network: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAmbassadorFeePercent(
      _ambassadorFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
