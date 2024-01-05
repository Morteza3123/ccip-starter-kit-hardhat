/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  MockRouter,
  MockRouterInterface,
} from "../../../../../artifacts/contracts/mocks/mockRouter.sol/MockRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "bytesToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "messageId",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sourceChainSelector",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "sender",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct Client.EVMTokenAmount[]",
            name: "destTokenAmounts",
            type: "tuple[]",
          },
        ],
        internalType: "struct Client.Any2EVMMessage",
        name: "message",
        type: "tuple",
      },
    ],
    name: "ccipReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "receiver",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct Client.EVMTokenAmount[]",
            name: "tokenAmounts",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "extraArgs",
            type: "bytes",
          },
        ],
        internalType: "struct Client.EVM2AnyMessage",
        name: "message",
        type: "tuple",
      },
    ],
    name: "ccipSend",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "receiver",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct Client.EVMTokenAmount[]",
            name: "tokenAmounts",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "extraArgs",
            type: "bytes",
          },
        ],
        internalType: "struct Client.EVM2AnyMessage",
        name: "message",
        type: "tuple",
      },
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFunctionSelector",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "chainSelector",
        type: "uint64",
      },
    ],
    name: "getSupportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "chainSelector",
        type: "uint64",
      },
    ],
    name: "isChainSupported",
    outputs: [
      {
        internalType: "bool",
        name: "supported",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061157e806100206000396000f3fe6080604052600436106100705760003560e01c806385572ffb1161004e57806385572ffb1461011a57806396f4e9f914610143578063a48a905814610173578063fbca3b74146101b057610070565b806310d1c4c31461007557806320487ded146100a057806342526e4e146100dd575b600080fd5b34801561008157600080fd5b5061008a6101ed565b60405161009791906106cc565b60405180910390f35b3480156100ac57600080fd5b506100c760048036038101906100c29190610b33565b610215565b6040516100d49190610b9e565b60405180910390f35b3480156100e957600080fd5b5061010460048036038101906100ff9190610bb9565b61021d565b6040516101119190610c11565b60405180910390f35b34801561012657600080fd5b50610141600480360381019061013c9190610d42565b61023a565b005b61015d60048036038101906101589190610daf565b61023d565b60405161016a9190610e1a565b60405180910390f35b34801561017f57600080fd5b5061019a60048036038101906101959190610e35565b6105ee565b6040516101a79190610e7d565b60405180910390f35b3480156101bc57600080fd5b506101d760048036038101906101d29190610e35565b6105f9565b6040516101e49190610f56565b60405180910390f35b60007f4f77c582c0335288fc6135883f0b9c0ae2a781158fd4e6f6edd3907243fffbbd905090565b600092915050565b6000818060200190518101906102339190610fb6565b9050919050565b50565b60008061029b8380600001906102539190610ff2565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061021d565b905060008380604001906102af9190611055565b905011156103cb5760005b8380604001906102ca9190611055565b90508110156103c9578380604001906102e39190611055565b828181106102f4576102f36110b8565b5b905060400201600001602081019061030c91906110e7565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd33848780604001906103399190611055565b8681811061034a576103496110b8565b5b905060400201602001356040518463ffffffff1660e01b815260040161037293929190611114565b6020604051808303816000875af1158015610391573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b59190611177565b5080806103c1906111d3565b9150506102ba565b505b6103d3610655565b8380602001906103e39190610ff2565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050816060018190525083806040019061043e9190611055565b808060200260200160405190810160405280939291908181526020016000905b8282101561048e5784848390506040020180360381019061047f919061121b565b8152602001906001019061045e565b50505050508160800181905250336040516020016104ac9190610c11565b604051602081830303815290604052816040018190525060008273ffffffffffffffffffffffffffffffffffffffff166385572ffb60e01b836040516024016104f59190611456565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161055f91906114b4565b6000604051808303816000865af19150503d806000811461059c576040519150601f19603f3d011682016040523d82523d6000602084013e6105a1565b606091505b50509050806105e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dc90611528565b60405180910390fd5b50505092915050565b600060019050919050565b606080600081600081518110610612576106116110b8565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505080915050919050565b6040518060a0016040528060008019168152602001600067ffffffffffffffff1681526020016060815260200160608152602001606081525090565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6106c681610691565b82525050565b60006020820190506106e160008301846106bd565b92915050565b6000604051905090565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b610718816106fb565b811461072357600080fd5b50565b6000813590506107358161070f565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61078982610740565b810181811067ffffffffffffffff821117156107a8576107a7610751565b5b80604052505050565b60006107bb6106e7565b90506107c78282610780565b919050565b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff8211156107f6576107f5610751565b5b6107ff82610740565b9050602081019050919050565b82818337600083830152505050565b600061082e610829846107db565b6107b1565b90508281526020810184848401111561084a576108496107d6565b5b61085584828561080c565b509392505050565b600082601f830112610872576108716107d1565b5b813561088284826020860161081b565b91505092915050565b600067ffffffffffffffff8211156108a6576108a5610751565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108e7826108bc565b9050919050565b6108f7816108dc565b811461090257600080fd5b50565b600081359050610914816108ee565b92915050565b6000819050919050565b61092d8161091a565b811461093857600080fd5b50565b60008135905061094a81610924565b92915050565b6000604082840312156109665761096561073b565b5b61097060406107b1565b9050600061098084828501610905565b60008301525060206109948482850161093b565b60208301525092915050565b60006109b36109ae8461088b565b6107b1565b905080838252602082019050604084028301858111156109d6576109d56108b7565b5b835b818110156109ff57806109eb8882610950565b8452602084019350506040810190506109d8565b5050509392505050565b600082601f830112610a1e57610a1d6107d1565b5b8135610a2e8482602086016109a0565b91505092915050565b600060a08284031215610a4d57610a4c61073b565b5b610a5760a06107b1565b9050600082013567ffffffffffffffff811115610a7757610a766107cc565b5b610a838482850161085d565b600083015250602082013567ffffffffffffffff811115610aa757610aa66107cc565b5b610ab38482850161085d565b602083015250604082013567ffffffffffffffff811115610ad757610ad66107cc565b5b610ae384828501610a09565b6040830152506060610af784828501610905565b606083015250608082013567ffffffffffffffff811115610b1b57610b1a6107cc565b5b610b278482850161085d565b60808301525092915050565b60008060408385031215610b4a57610b496106f1565b5b6000610b5885828601610726565b925050602083013567ffffffffffffffff811115610b7957610b786106f6565b5b610b8585828601610a37565b9150509250929050565b610b988161091a565b82525050565b6000602082019050610bb36000830184610b8f565b92915050565b600060208284031215610bcf57610bce6106f1565b5b600082013567ffffffffffffffff811115610bed57610bec6106f6565b5b610bf98482850161085d565b91505092915050565b610c0b816108dc565b82525050565b6000602082019050610c266000830184610c02565b92915050565b6000819050919050565b610c3f81610c2c565b8114610c4a57600080fd5b50565b600081359050610c5c81610c36565b92915050565b600060a08284031215610c7857610c7761073b565b5b610c8260a06107b1565b90506000610c9284828501610c4d565b6000830152506020610ca684828501610726565b602083015250604082013567ffffffffffffffff811115610cca57610cc96107cc565b5b610cd68482850161085d565b604083015250606082013567ffffffffffffffff811115610cfa57610cf96107cc565b5b610d068482850161085d565b606083015250608082013567ffffffffffffffff811115610d2a57610d296107cc565b5b610d3684828501610a09565b60808301525092915050565b600060208284031215610d5857610d576106f1565b5b600082013567ffffffffffffffff811115610d7657610d756106f6565b5b610d8284828501610c62565b91505092915050565b600080fd5b600060a08284031215610da657610da5610d8b565b5b81905092915050565b60008060408385031215610dc657610dc56106f1565b5b6000610dd485828601610726565b925050602083013567ffffffffffffffff811115610df557610df46106f6565b5b610e0185828601610d90565b9150509250929050565b610e1481610c2c565b82525050565b6000602082019050610e2f6000830184610e0b565b92915050565b600060208284031215610e4b57610e4a6106f1565b5b6000610e5984828501610726565b91505092915050565b60008115159050919050565b610e7781610e62565b82525050565b6000602082019050610e926000830184610e6e565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610ecd816108dc565b82525050565b6000610edf8383610ec4565b60208301905092915050565b6000602082019050919050565b6000610f0382610e98565b610f0d8185610ea3565b9350610f1883610eb4565b8060005b83811015610f49578151610f308882610ed3565b9750610f3b83610eeb565b925050600181019050610f1c565b5085935050505092915050565b60006020820190508181036000830152610f708184610ef8565b905092915050565b6000610f83826108bc565b9050919050565b610f9381610f78565b8114610f9e57600080fd5b50565b600081519050610fb081610f8a565b92915050565b600060208284031215610fcc57610fcb6106f1565b5b6000610fda84828501610fa1565b91505092915050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261100f5761100e610fe3565b5b80840192508235915067ffffffffffffffff82111561103157611030610fe8565b5b60208301925060018202360383131561104d5761104c610fed565b5b509250929050565b6000808335600160200384360303811261107257611071610fe3565b5b80840192508235915067ffffffffffffffff82111561109457611093610fe8565b5b6020830192506040820236038313156110b0576110af610fed565b5b509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156110fd576110fc6106f1565b5b600061110b84828501610905565b91505092915050565b60006060820190506111296000830186610c02565b6111366020830185610c02565b6111436040830184610b8f565b949350505050565b61115481610e62565b811461115f57600080fd5b50565b6000815190506111718161114b565b92915050565b60006020828403121561118d5761118c6106f1565b5b600061119b84828501611162565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111de8261091a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036112105761120f6111a4565b5b600182019050919050565b600060408284031215611231576112306106f1565b5b600061123f84828501610950565b91505092915050565b61125181610c2c565b82525050565b611260816106fb565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156112a0578082015181840152602081019050611285565b60008484015250505050565b60006112b782611266565b6112c18185611271565b93506112d1818560208601611282565b6112da81610740565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61131a8161091a565b82525050565b6040820160008201516113366000850182610ec4565b5060208201516113496020850182611311565b50505050565b600061135b8383611320565b60408301905092915050565b6000602082019050919050565b600061137f826112e5565b61138981856112f0565b935061139483611301565b8060005b838110156113c55781516113ac888261134f565b97506113b783611367565b925050600181019050611398565b5085935050505092915050565b600060a0830160008301516113ea6000860182611248565b5060208301516113fd6020860182611257565b506040830151848203604086015261141582826112ac565b9150506060830151848203606086015261142f82826112ac565b915050608083015184820360808601526114498282611374565b9150508091505092915050565b6000602082019050818103600083015261147081846113d2565b905092915050565b600081905092915050565b600061148e82611266565b6114988185611478565b93506114a8818560208601611282565b80840191505092915050565b60006114c08284611483565b915081905092915050565b600082825260208201905092915050565b7f6d6f636b20726f757465722064656c65676174652063616c6c206661696c6564600082015250565b60006115126020836114cb565b915061151d826114dc565b602082019050919050565b6000602082019050818103600083015261154181611505565b905091905056fea2646970667358221220666ac74a19e7d5c276f169cfe5ee9edf29949ffe97d49aa281821842fd32ddca64736f6c63430008130033";

type MockRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockRouter__factory extends ContractFactory {
  constructor(...args: MockRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockRouter> {
    return super.deploy(overrides || {}) as Promise<MockRouter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockRouter {
    return super.attach(address) as MockRouter;
  }
  override connect(signer: Signer): MockRouter__factory {
    return super.connect(signer) as MockRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockRouterInterface {
    return new utils.Interface(_abi) as MockRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRouter {
    return new Contract(address, _abi, signerOrProvider) as MockRouter;
  }
}
