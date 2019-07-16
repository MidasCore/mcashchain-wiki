# McashWeb

[McashWeb](https://github.com/MidasCore/mcashweb) is a comprehensive JavaScript library containing API functions that enable developers to deploy smart contracts, change the blockchain state, query blockchain and contract information.

### McashWeb Object
```javascript
const mcashWeb = new McashWeb({
    fullHost: 'https://mainnet.mcash.network',
    privateKey: 'your private key'
  }
)
```
### address
Helper object that allows you to convert between hex / base58 and private key representations of a address. Note: If you wish to convert generic data to hexadecimal strings, please use the function McashWeb.toHex.
```javascript
McashWeb.address.toHex("MJ3DhnJbVYiV8P3eUUSzTbkuatR56zYPw2")

result = "326F377BC42F76D7ED3ABB54A2EF6FF24FCF7F7CA3"
```

### toMatoshi
Helper function that converts a value in Mcash to Matoshi. (1 Mcash = 100.000.000 Matoshi)
```javascript
McashWeb.toMatoshi(12)

result = 1200000000
```

### fromMatoshi
Helper function that converts a value in Matoshi to Mcash. (1 Mcash = 100.000.000 Matoshi)
```javascript
McashWeb.fromMatoshi(12000000)

result = 0.12
```

### isAddress
Helper function that checks if a given address is valid.
```javascript
McashWeb.isAddress("MJ3DhnJbVYiV8P3eUUSzTbkuatR56zYPw2")

McashWeb.isAddress("326F377BC42F76D7ED3ABB54A2EF6FF24FCF7F7CA3")

return = true
```

### createAccount
Helper function that generates a new private key + address combination. This account is not activated on the network.
```javascript
McashWeb.createAccount();
```

# McashWeb.mcash
## Addresses & Accounts
### getAccount
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|address|Mcash address|string|
##### Example
```javascript
mcashWeb.mcash.getAccount("M8TP6RutmttRY9BCUz7SydDZjhb7SWgSJy");
```
##### Output
```json
{
  "address": "3206180c288e08db62aa1772ba30434517d8f2a7ec",
  "balance": 3969000000000,
  "create_time": 1561711818000,
  "account_resource": {
    "latest_bandwidth_consume_time": 1561521600000,
    "latest_free_bandwidth_consume_time": 1561521600000,
    "latest_energy_consume_time": 1561521600000
  }
}
```

### getAccountResources
Get the account's bandwidth and energy resources.
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|address|Mcash address|string|
##### Example
```javascript
mcashWeb.mcash.getAccountResources("M8TP6RutmttRY9BCUz7SydDZjhb7SWgSJy");
```
##### Output
```json
{
  "free_bandwidth_limit": 10000,
  "total_bandwidth_limit": 43200000000,
  "total_bandwidth_weight": 640693,
  "total_energy_limit": 50000000000,
  "total_energy_weight": 502471
}
```


### getBalance
Get the account Mcash balance.
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|address|Mcash address|string|
##### Example
```javascript
mcashWeb.mcash.getBalance("MJ3DhnJbVYiV8P3eUUSzTbkuatR56zYPw2");
```

## Transactions
### getTransaction
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|Transaction ID|Transaction ID|string|
##### Example
```javascript
mcashWeb.mcash.getTransaction("87692949ef7902fa22e6752003edad1b148ee1fcef1ee43f87e572912ee46379");
```
##### Output
```json
{
  "ret": [
    {
      "contract_result": "OK"
    }
  ],
  "signature": [
    "e5fce8e9a14045424dc17386e94b55700910f1c3e569ef0c690259cadd49e0d27deecf390f27b89d7f16c60106680bdb823ad5a78ba30d9691012d1ab8ecffb001"
  ],
  "tx_id": "87692949ef7902fa22e6752003edad1b148ee1fcef1ee43f87e572912ee46379",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "amount": 19900000000,
            "owner_address": "32b436c96c6de1f50a160ed307317c275424dbe4f2",
            "to_address": "32613f654ba1a3e43cd3120c344e32e68c67a77f27"
          },
          "type_url": "type.googleapis.com/protocol.TransferContract"
        },
        "type": "TransferContract"
      }
    ],
    "ref_block_bytes": "01aa",
    "ref_block_hash": "ea2cf51f1b6cba3a",
    "expiration": 1562703801000,
    "timestamp": 1562703743117
  },
  "raw_data_hex": "0a0201aa2208ea2cf51f1b6cba3a40a8d59ec3bd2d5a69080112650a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412340a1532b436c96c6de1f50a160ed307317c275424dbe4f2121532613f654ba1a3e43cd3120c344e32e68c67a77f271880ce87914a708d919bc3bd2d"
}
```

### getTransactionFromBlock
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|Block height|Block height|integer|
##### Example
```javascript
mcashWeb.mcash.getTransactionFromBlock(380087);
```


### sendRawTransaction
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|signedTransaction|The signed transaction object|JSON|
##### Example
```javascript
mcashWeb.mcash.sendRawTransaction(signedTransaction);
```


### sign
Signs a provided transaction object.
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|transaction|Transaction object|JSON|
|privateKey|Private Key associated with the transaction|string|
##### Example
```javascript
mcashWeb.mcash.sign(transaction, privateKey);
```

## Query network


### getBlock
Get block by height and id
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|Block Height|Block Height|integer|
##### Example
```javascript
mcashWeb.mcash.getBlock(380087);
```
##### Output
```json
{
  "block_header": {
    "raw_data": {
      "number": 380087,
      "witness_address": "32dc2f806d9f3ab5ff6f09915c2db276f31db42922",
      "version": 1,
      "parent_hash": "000000000005ccb63951a126e6d4d7f1300d2a0749f609a17cd0a3f332616a84",
      "timestamp": 1562663040000,
      "tx_trie_root": "60dd83acf38e8099f4ae661b51c089a461ac02e7c513815fdb2e85a286e6bc4c"
    },
    "witness_signature": "f069027e7e3ff7cfd531af081260b6c5f25b8d4d5ef47abcd8507904a4d3e9114abdfcfff9622f15754ce687473943d435e3b349098300a2efff41e0fb85f9fd01"
  },
  "transactions": [
    {
      "ret": [
        {
          "contract_result": "OK"
        }
      ],
      "signature": [
        "529d1932c62ba4f683efceda32096b35ad6cc7ace4ef1b584cc5f6423168ea810de60cd9da9b6b8c5e1ef9527187a058148645c86a2cbbac12c65008634446a100"
      ],
      "tx_id": "53cd966bd4e5ebb1d3edfef36796401d562a58d85eb0402c297b99ac48f8cb47",
      "raw_data": {
        "contract": [
          {
            "parameter": {
              "value": {
                "amount": 20000000000,
                "owner_address": "321036355254b644cf3ca1fc758b7b498113fcc6d4",
                "to_address": "32234c905817f8e137b0b6fab61c1999be574266a1"
              },
              "type_url": "type.googleapis.com/protocol.TransferContract"
            },
            "type": "TransferContract"
          }
        ],
        "ref_block_bytes": "ccb6",
        "ref_block_hash": "3951a126e6d4d7f1",
        "expiration": 1562663097000,
        "timestamp": 1562663037706
      },
      "raw_data_hex": "0a02ccb622083951a126e6d4d7f140a8a5eaafbd2d5a69080112650a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412340a15321036355254b644cf3ca1fc758b7b498113fcc6d4121532234c905817f8e137b0b6fab61c1999be574266a1188090dfc04a708ad6e6afbd2d"
    }
  ],
  "block_id": "000000000005ccb7f3533db6e861cb811420fabd710b12907d229272736e46c2"
}
```

### getBlockByHash
Get block information on the Full Node, specified by block header hash number.
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|Block id|Block id|string|
##### Example
```javascript
mcashWeb.mcash.getBlockByHash("000000000000004473dacbb6a6b3b0cabad78c340f3fccb1991b7714bd83b1e0");
```


### getBlockByNumber
Gets a block by height.
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|Block Number|Block height|integer|
##### Example
```javascript
mcashWeb.mcash.getBlockByNumber(68);
```


### getBlockRange
Gets a block by height in range.
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|Starting Block|Block number of the beginning of the range|integer|
|Ending Block|Block number of the end of the range|integer|
##### Example
```javascript
mcashWeb.mcash.getBlockRange(68, 70);
```

### getCurrentBlock
Get current block on the Full Node.
##### Example
```javascript
mcashWeb.mcash.getCurrentBlock();
```


## Smart Contracts


### getContract
Get the details of the contract at the specified address.
##### Parameters
|Parameter|Description|Data Type|
|--|--|--|
|address|Smart Contract Address|string|
##### Example
```javascript
mcashWeb.mcash.getContract("MLpZUn1YBb2zNwRSiYXq5zpWdXEyyKNrji");
```



# McashWeb.transactionBuilder


### sendMcash
Create an unsigned Mcash transfer transaction.
##### Parameters
|Parameter|Description|Data Type|
|-|-|-|
|to|Address to send Mcash to|string|
|amount|Amount of Mcash (in Matoshi) to send|integer|
|from|Optional address that is transferring the Tokens. If left blank, will use the address associated with the private key|string|
##### Example
```javascript
mcashWeb.transactionBuilder.sendMcash(to, amount, from);

mcashWeb.transactionBuilder.sendMcash("MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz", 100, "M9Fbdp9xRb66fct5zkgjN5FjGJ1X8WV9JT");
```

### sendToken
Create an unsigned Mcash transfer transaction.
##### Parameters
|Parameter|Description|Data Type|
|-|-|-|
|to|Address to send Token to|string|
|amount|Amount of Token to send|integer|
|tokenId|Token id|integer|
|from|Optional address that is transferring the Tokens|string|
##### Example
```javascript
mcashWeb.transactionBuilder.sendToken(to, amount, tokenId, from);

mcashWeb.transactionBuilder.sendToken("MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz", 100, 1000001, "M9Fbdp9xRb66fct5zkgjN5FjGJ1X8WV9JT");
```

### freezeBalance
Allows users to freeze their Mcash balance to grant ENERGY or BANDWIDTH to either themselves or other addresses. Creates an unsigned freeze Mcash transaction.
##### Parameters
|Parameter|Description|Data Type|
|-|-|-|
|amount|Amount of Mcash (in Matoshi) to freeze|integer|
|duration|Length in Days to freeze Mcash for. Minimum of 3 days|integer|
|resource|Resource that you're freezing Mcash in order to obtain. Must be either "BANDWIDTH" or "ENERGY"|string|
|ownerAddress (optional)|Address of the owner of the Mcash to be frozen (defaults to caller's default address)|string|
|receiverAddress (optional)|Address of other user receiving the resource|string|
##### Example
```javascript
mcashWeb.transactionBuilder.freezeBalance(amount, duration, resource, ownerAddress, receiverAddress);

mcashWeb.transactionBuilder.freezeBalance(McashWeb.toMatoshi(100), 3, "ENERGY", "MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz");
mcashWeb.transactionBuilder.freezeBalance(McashWeb.toMatoshi(100), 3, "ENERGY", "MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz", "M9Fbdp9xRb66fct5zkgjN5FjGJ1X8WV9JT");
```


### unfreezeBalance
Creates an unsigned unfreeze Mcash transaction.
##### Parameters
|Parameter|Description|Data Type|
|-|-|-|
|resource|Resource that you're freezing Mcash in order to obtain. Must be either "BANDWIDTH" or "ENERGY"|string|
|ownerAddress (optional)|Address of the owner of the Mcash to be frozen (defaults to caller's default address)|string|
|receiverAddress (optional)|Address of user in which the resource is being removed from, due to unfreeze|string|
##### Example
```javascript
mcashWeb.transactionBuilder.unfreezeBalance(resource, ownerAddress, receiverAddress);

mcashWeb.transactionBuilder.unfreezeBalance("ENERGY", "MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz");
mcashWeb.transactionBuilder.unfreezeBalance("ENERGY", "MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz", "M9Fbdp9xRb66fct5zkgjN5FjGJ1X8WV9JT");
```


### stake
Creates an unsigned stake Mcash transaction.
##### Parameters
|Parameter|Description|Data Type|
|-|-|-|
|amount|Amount of Mcash (in Matoshi) to stake|integer|
|stakeDuration|Length in Days to stake Mcash for. Always 3 days|integer|
|ownerAddress (optional)|Address of the owner of the Mcash to be staked (defaults to caller's default address)|string|
##### Example
```javascript
mcashWeb.transactionBuilder.stake(amount, stakeDuration, ownerAddress);

mcashWeb.transactionBuilder.stake(McashWeb.toMatoshi(5000), 3, "MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz");
```

### withdrawBlockRewards
Creates an unsigned withdraw Mcash transaction.
##### Parameters
|Parameter|Description|Data Type|
|-|-|-|
|ownerAddress (optional)|Optional address to withdraw from|string|
##### Example
```javascript
mcashWeb.transactionBuilder.withdrawbalance(ownerAddress);

mcashWeb.transactionBuilder.withdrawbalance("MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz");
```

### createWitness
Creates an unsigned create witness transaction.
##### Parameters
|Parameter|Description|Data Type|
|-|-|-|
|witnessAddress|Witness address|string|
|ownerAddress|Owner address|string|
|url|Url to witness|string|
##### Example
```javascript
mcashWeb.transactionBuilder.createWitness(witnessAddress, ownerAddress, url);

mcashWeb.transactionBuilder.createWitness("M9Fbdp9xRb66fct5zkgjN5FjGJ1X8WV9JT", "MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz", "https://mcash.network");
```


### vote
Creates an unsigned vote transaction.
##### Parameters
|Parameter|Description|Data Type|
|-|-|-|
|voteAddress|Witness address|string|
|ownerAddress(option)|Owner address|string|
##### Example
```javascript
mcashWeb.transactionBuilder.vote(witnessAddress, ownerAddress);

mcashWeb.transactionBuilder.vote("M9Fbdp9xRb66fct5zkgjN5FjGJ1X8WV9JT", "MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz");
```


### createSmartContract

##### Parameters
|Parameter|Description|Data Type|
|---------|--------|----|
|abi|Contract's Application Binary Interface|string|
|bytecode|The compiled contract's identifier, used to interact with the Virtual Machine|string|
|parameters|Parameter passed to the constructor of the contract|string|
|name|Contract name|string|
|feeLimit|The upper limit of the smart contract deploy cost, in Matoshi|int64|
|userFeePercentage|The percentage of resources specified for users who use this contract. This field accepts integers between [0, 100]. If it is 0, it means the user does not consume resources until the developer resources are exhausted. However, it is strongly recommended to set the value between 1 and 99 (inclusive). This is prevent the contract developer from potential malicious infinite loop time out attacks|int32|
|originEnergyLimit|The max energy which will be consumed by the owner in the process of execution or creation of the contract, is an integer which should be greater than 0|int64|
|callValue|Amount of Matoshi transferred with this deployment|int64|
##### Example
```javascript
mcashWeb.transactionBuilder.createSmartContract(params, ownerAddress);

params = {
    abi = "[ { \"constant\": true, \"inputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"name\": \"enrolled\", \"outputs\": [ { \"name\": \"\", \"type\": \"bool\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"withdrawAmount\", \"type\": \"uint256\" } ], \"name\": \"withdraw\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"owner\", \"outputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"balance\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [], \"name\": \"deposit\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": true, \"stateMutability\": \"payable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [], \"name\": \"enroll\", \"outputs\": [ { \"name\": \"\", \"type\": \"bool\" } ], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"fallback\" } ]",
    bytecode = "608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610517806100616000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806310eb0e0e1461008a5780632e1a7d4d146100e55780638da5cb5b14610126578063b69ef8a81461017d578063d0e30db0146101a8578063e65f2a7e146101c6575b34801561008457600080fd5b50600080fd5b34801561009657600080fd5b506100cb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101f5565b604051808215151515815260200191505060405180910390f35b3480156100f157600080fd5b5061011060048036038101908080359060200190929190505050610215565b6040518082815260200191505060405180910390f35b34801561013257600080fd5b5061013b610342565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561018957600080fd5b50610192610368565b6040518082815260200191505060405180910390f35b6101b06103ae565b6040518082815260200191505060405180910390f35b3480156101d257600080fd5b506101db610440565b604051808215151515815260200191505060405180910390f35b60016020528060005260406000206000915054906101000a900460ff1681565b600080339050826000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561026857600080fd5b826000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508073ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501580156102fa573d6000803e3d6000fd5b506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050905600a165627a7a7230582016c9414dbe86928eb71788a7d75060479e8785b875dfaad3eca6ea4ad5e1cd4e0029",
    parameters = "",
    name = "SimpleBank",
    feeLimit = 1000000000,
    userFeePercentage = 50,
    originEnergyLimit = 100000,
    callValue = 0
};
mcashWeb.transactionBuilder.createSmartContract(params, "MF7uTJWM8HMWPTWhtoopQBjXR5NmoW45Gz");
```
