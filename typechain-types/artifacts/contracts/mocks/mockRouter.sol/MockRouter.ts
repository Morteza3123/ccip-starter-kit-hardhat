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
  PayableOverrides,
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
} from "../../../../common";

export declare namespace Client {
  export type EVMTokenAmountStruct = {
    token: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type EVMTokenAmountStructOutput = [string, BigNumber] & {
    token: string;
    amount: BigNumber;
  };

  export type Any2EVMMessageStruct = {
    messageId: PromiseOrValue<BytesLike>;
    sourceChainSelector: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<BytesLike>;
    data: PromiseOrValue<BytesLike>;
    destTokenAmounts: Client.EVMTokenAmountStruct[];
  };

  export type Any2EVMMessageStructOutput = [
    string,
    BigNumber,
    string,
    string,
    Client.EVMTokenAmountStructOutput[]
  ] & {
    messageId: string;
    sourceChainSelector: BigNumber;
    sender: string;
    data: string;
    destTokenAmounts: Client.EVMTokenAmountStructOutput[];
  };

  export type EVM2AnyMessageStruct = {
    receiver: PromiseOrValue<BytesLike>;
    data: PromiseOrValue<BytesLike>;
    tokenAmounts: Client.EVMTokenAmountStruct[];
    feeToken: PromiseOrValue<string>;
    extraArgs: PromiseOrValue<BytesLike>;
  };

  export type EVM2AnyMessageStructOutput = [
    string,
    string,
    Client.EVMTokenAmountStructOutput[],
    string,
    string
  ] & {
    receiver: string;
    data: string;
    tokenAmounts: Client.EVMTokenAmountStructOutput[];
    feeToken: string;
    extraArgs: string;
  };
}

export interface MockRouterInterface extends utils.Interface {
  functions: {
    "bytesToAddress(bytes)": FunctionFragment;
    "ccipReceive((bytes32,uint64,bytes,bytes,(address,uint256)[]))": FunctionFragment;
    "ccipSend(uint64,(bytes,bytes,(address,uint256)[],address,bytes))": FunctionFragment;
    "getFee(uint64,(bytes,bytes,(address,uint256)[],address,bytes))": FunctionFragment;
    "getFunctionSelector()": FunctionFragment;
    "getSupportedTokens(uint64)": FunctionFragment;
    "isChainSupported(uint64)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bytesToAddress"
      | "ccipReceive"
      | "ccipSend"
      | "getFee"
      | "getFunctionSelector"
      | "getSupportedTokens"
      | "isChainSupported"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bytesToAddress",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "ccipReceive",
    values: [Client.Any2EVMMessageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "ccipSend",
    values: [PromiseOrValue<BigNumberish>, Client.EVM2AnyMessageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getFee",
    values: [PromiseOrValue<BigNumberish>, Client.EVM2AnyMessageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getFunctionSelector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isChainSupported",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "bytesToAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ccipReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ccipSend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFunctionSelector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isChainSupported",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockRouterInterface;

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
    bytesToAddress(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ccipSend(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFee(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee: BigNumber }>;

    getFunctionSelector(overrides?: CallOverrides): Promise<[string]>;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    isChainSupported(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { supported: boolean }>;
  };

  bytesToAddress(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  ccipReceive(
    message: Client.Any2EVMMessageStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ccipSend(
    destinationChainSelector: PromiseOrValue<BigNumberish>,
    message: Client.EVM2AnyMessageStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFee(
    destinationChainSelector: PromiseOrValue<BigNumberish>,
    message: Client.EVM2AnyMessageStruct,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFunctionSelector(overrides?: CallOverrides): Promise<string>;

  getSupportedTokens(
    chainSelector: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  isChainSupported(
    chainSelector: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    bytesToAddress(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    ccipSend(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getFee(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFunctionSelector(overrides?: CallOverrides): Promise<string>;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    isChainSupported(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    bytesToAddress(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ccipSend(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFee(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFunctionSelector(overrides?: CallOverrides): Promise<BigNumber>;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isChainSupported(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bytesToAddress(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ccipSend(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFee(
      destinationChainSelector: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFunctionSelector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isChainSupported(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
