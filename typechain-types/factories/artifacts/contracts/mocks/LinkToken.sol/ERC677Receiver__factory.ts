/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC677Receiver,
  ERC677ReceiverInterface,
} from "../../../../../artifacts/contracts/mocks/LinkToken.sol/ERC677Receiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ERC677Receiver__factory {
  static readonly abi = _abi;
  static createInterface(): ERC677ReceiverInterface {
    return new utils.Interface(_abi) as ERC677ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC677Receiver {
    return new Contract(address, _abi, signerOrProvider) as ERC677Receiver;
  }
}
