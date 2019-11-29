# Deploy smart contract

## McashStudio

McashStudio is an IDE for developing, deploying, and debugging smart contracts based on MVM. It uses gRPC to register accounts, deploy, and trigger smart contracts.

[TODO]

## McashBox
[McashBox](https://www.npmjs.com/package/mcashbox) is development environment, testing framework and asset pipeline for blockchains using the Mcash Virtual Machine (MVM).

### Installation
```npm install -g mcashbox```

### Requirements
* NodeJS v8.9.4 or later
* Windows, Linux or Mac OS X

### Creating a Project
1. Create a new directory for your McashBox project:
    ```
    mkdir test
    cd test
    ```

2. Create bare project:
    ```
    mcashbox init
    ```

Once this operation is completed, you'll now have a project structure with the following items:

* contracts/: Directory for Solidity contracts
* migrations/: Directory for scriptable deployment files
* test/: Directory for test files for testing your application and contracts
* config.js: Configuration file

Example configuration file:
```javascript
const port = process.env.HOST_PORT || 13399;

module.exports = {
    networks: {
        mainnet: {
            privateKey: process.env.PRIVATE_KEY_MAINNET,
            userFeePercentage: 100,
            feeLimit: 1e9,
            fullHost: "https://mainnet.mcash.network",
            network_id: "1"
        },
        testnet: {
            privateKey: process.env.PRIVATE_KEY_TESTNET,
            userFeePercentage: 50,
            feeLimit: 1e9,
            fullHost: "https://testnet.mcash.network",
            network_id: "3",
        },
        development: {
            // For local
            privateKey: '261b559a288dbeffdea44225b30dab6246bb2eaeb23c1ff9283cb74a716f0c5c',
            userFeePercentage: 50,
            feeLimit: 1e9,
            fullHost: 'http://127.0.0.1:' + port,
            network_id: "19",
        }
    }
};
```

### Compiling contracts
All of your contracts are located in your project's `contracts/` directory. As contracts are written in Solidity, all files containing contracts will have a file extension of `.sol`. Associated Solidity libraries will also have a `.sol` extension.

To compile project, change to the root of the directory where the project is located and then type the following into a terminal:
```
mcashbox compile
```

Upon first run, all contracts will be compiled. Upon subsequent runs, Mcashbox will compile only the contracts that have been changed since the last compile. If you'd like to override this behavior, run the above command with the `--compile-all` option.

Artifacts of your compilation will be placed in the `build/contracts/` directory, relative to your project root. 

### Running Migrations (Deploy)
To run your migrations, run the following:
```
mcashbox migrate
```

This will run all migrations located within your project's `migrations` directory. 

Options: 

* --reset: run all your migrations from the beginning
* --network: select network to deploy


A simple migration file looks like this:

```javascript
var MyContract = artifacts.require("MyContract");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};
```

Note that the filename is prefixed with a number and is suffixed by a description. The numbered prefix is required in order to record whether the migration ran successfully. The suffix is purely for human readability and comprehension.

## McashWeb

Compile contract using `mcashbox` or `solc-mcash` to get contract's bytecode and abi. Create deployment transaction using [`McashWeb.transactionBuilder.createSmartContract`](/guide/sdk/mcashweb.html#createsmartcontract). Then sign & broadcast it to blockchain.

Example 
```javascript
const McashWeb = require("mcashweb");

const mcashWeb = new McashWeb({
    fullHost: 'https://testnet.mcash.network'
  }
);

let options = {
    abi = "[ { \"constant\": true, \"inputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"name\": \"enrolled\", \"outputs\": [ { \"name\": \"\", \"type\": \"bool\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"withdrawAmount\", \"type\": \"uint256\" } ], \"name\": \"withdraw\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"owner\", \"outputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"balance\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [], \"name\": \"deposit\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": true, \"stateMutability\": \"payable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [], \"name\": \"enroll\", \"outputs\": [ { \"name\": \"\", \"type\": \"bool\" } ], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"fallback\" } ]",
    bytecode = "608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610517806100616000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806310eb0e0e1461008a5780632e1a7d4d146100e55780638da5cb5b14610126578063b69ef8a81461017d578063d0e30db0146101a8578063e65f2a7e146101c6575b34801561008457600080fd5b50600080fd5b34801561009657600080fd5b506100cb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101f5565b604051808215151515815260200191505060405180910390f35b3480156100f157600080fd5b5061011060048036038101908080359060200190929190505050610215565b6040518082815260200191505060405180910390f35b34801561013257600080fd5b5061013b610342565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561018957600080fd5b50610192610368565b6040518082815260200191505060405180910390f35b6101b06103ae565b6040518082815260200191505060405180910390f35b3480156101d257600080fd5b506101db610440565b604051808215151515815260200191505060405180910390f35b60016020528060005260406000206000915054906101000a900460ff1681565b600080339050826000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561026857600080fd5b826000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508073ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501580156102fa573d6000803e3d6000fd5b506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050905600a165627a7a7230582016c9414dbe86928eb71788a7d75060479e8785b875dfaad3eca6ea4ad5e1cd4e0029",
    parameters = "",
    name = "SimpleBank",
    feeLimit = 1000000000,
    userFeePercentage = 50,
    originEnergyLimit = 100000,
    callValue = 0
};

let transaction = await mcashWeb.transactionBuilder.createSmartContract(options, address);
let signedTransaction = await mcashWeb.mcash.sign(transaction, privateKey);
let result = await mcashWeb.mcash.sendRawTransaction(signedTransaction);
```


After running script, the transaction is sent on the blockchain. You can check status on [mcashscan](https://mcashscan.io) or [testnet mcashscan](https://testnet.mcashscan.io) for testnet.

