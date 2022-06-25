/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace Patreon {
  export type TierStruct = {
    published: PromiseOrValue<boolean>;
    title: PromiseOrValue<string>;
    price: PromiseOrValue<BigNumberish>;
    image: PromiseOrValue<string>;
    benefits: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
  };

  export type TierStructOutput = [
    boolean,
    string,
    BigNumber,
    string,
    string,
    string
  ] & {
    published: boolean;
    title: string;
    price: BigNumber;
    image: string;
    benefits: string;
    description: string;
  };

  export type CreatorStruct = {
    launched: PromiseOrValue<boolean>;
    creatorAddress: PromiseOrValue<string>;
    profilePhoto: PromiseOrValue<string>;
    coverPhoto: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
    isAreCreating: PromiseOrValue<string>;
    about: PromiseOrValue<string>;
    tiers: Patreon.TierStruct[];
  };

  export type CreatorStructOutput = [
    boolean,
    string,
    string,
    string,
    string,
    string,
    string,
    Patreon.TierStructOutput[]
  ] & {
    launched: boolean;
    creatorAddress: string;
    profilePhoto: string;
    coverPhoto: string;
    name: string;
    isAreCreating: string;
    about: string;
    tiers: Patreon.TierStructOutput[];
  };
}

export interface PatreonInterface extends utils.Interface {
  functions: {
    "fillBasics(string,string,string,string,string)": FunctionFragment;
    "getCreator(address)": FunctionFragment;
    "getCreator(uint256)": FunctionFragment;
    "getCreatorCount()": FunctionFragment;
    "launch()": FunctionFragment;
    "takeDown()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fillBasics"
      | "getCreator(address)"
      | "getCreator(uint256)"
      | "getCreatorCount"
      | "launch"
      | "takeDown"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "fillBasics",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreator(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreator(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreatorCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "launch", values?: undefined): string;
  encodeFunctionData(functionFragment: "takeDown", values?: undefined): string;

  decodeFunctionResult(functionFragment: "fillBasics", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCreator(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreator(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreatorCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "launch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "takeDown", data: BytesLike): Result;

  events: {};
}

export interface Patreon extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PatreonInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    fillBasics(
      _profilePhoto: PromiseOrValue<string>,
      _coverPhoto: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _isAreCreating: PromiseOrValue<string>,
      _about: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "getCreator(address)"(
      _creatorId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [Patreon.CreatorStructOutput] & { _creator: Patreon.CreatorStructOutput }
    >;

    "getCreator(uint256)"(
      _creatorId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [Patreon.CreatorStructOutput] & { _creator: Patreon.CreatorStructOutput }
    >;

    getCreatorCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    launch(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    takeDown(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  fillBasics(
    _profilePhoto: PromiseOrValue<string>,
    _coverPhoto: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _isAreCreating: PromiseOrValue<string>,
    _about: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "getCreator(address)"(
    _creatorId: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Patreon.CreatorStructOutput>;

  "getCreator(uint256)"(
    _creatorId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Patreon.CreatorStructOutput>;

  getCreatorCount(overrides?: CallOverrides): Promise<BigNumber>;

  launch(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  takeDown(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fillBasics(
      _profilePhoto: PromiseOrValue<string>,
      _coverPhoto: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _isAreCreating: PromiseOrValue<string>,
      _about: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "getCreator(address)"(
      _creatorId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Patreon.CreatorStructOutput>;

    "getCreator(uint256)"(
      _creatorId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Patreon.CreatorStructOutput>;

    getCreatorCount(overrides?: CallOverrides): Promise<BigNumber>;

    launch(overrides?: CallOverrides): Promise<boolean>;

    takeDown(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    fillBasics(
      _profilePhoto: PromiseOrValue<string>,
      _coverPhoto: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _isAreCreating: PromiseOrValue<string>,
      _about: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "getCreator(address)"(
      _creatorId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCreator(uint256)"(
      _creatorId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreatorCount(overrides?: CallOverrides): Promise<BigNumber>;

    launch(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    takeDown(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fillBasics(
      _profilePhoto: PromiseOrValue<string>,
      _coverPhoto: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _isAreCreating: PromiseOrValue<string>,
      _about: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "getCreator(address)"(
      _creatorId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCreator(uint256)"(
      _creatorId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreatorCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    launch(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    takeDown(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
