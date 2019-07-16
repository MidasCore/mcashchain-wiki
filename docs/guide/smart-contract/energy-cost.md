# Energy Costs Table

Below is a table with call Energy usage estimates, cost classification tier, operation notes, and energy calculation notes.

For the Cost Tier, the classification is as follows:

* ZeroTier: 0 energy expended
* BaseTier: Approximately 2 energy expenditure
* VeryLowTier: Approximately 3 energy expenditure
* MidTier: Approximately 8 energy expenditure
* HighTier: Approximately 10 energy expenditure
* ExtTier: Approximately 20 energy expenditure
* SpecialTier: Custom amount of energy expenditure. Can be very high. 

|Code|Mnemonic|Energy Used|Cost Tier|Operation Notes|Energy Calculation Notes|
|----|--------|---------------------|---------|---------------|------------------------|
|0x00|STOP|0|ZeroTier|Halts execution||
|0x01|ADD|3|VeryLowTier|Addition operation||
|0x02|MUL|5|LowTier|Multiplication operation||
|0x03|SUB|3|VeryLowTier|Subtraction operation||
|0x04|DIV|5|LowTier|Integer division operation||
|0x05|SDIV|5|LowTier|Signed integer division operation||
|0x06|MOD|5|LowTier|Modulo remainder operation||
|0x07|SMOD|5|LowTier|Signed modulo remainder operation||
|0x08|ADDMOD|8|MidTier|Modulo addition operation||
|0x09|MULMOD|8|MidTier|Modulo multiplication operation||
|0x0a|EXP|(exp == 0) ? 10 : (10 + 10 * (1 + log256(exp)))|SpecialTier|Exponential operation|If exponent is 0, gas used is 10. If exponent is greater than 0, gas used is 10 plus 10 times a factor related to how large the log of the exponent is.|
|0x0b|SIGNEXTEND|5|LowTier|Extend length of two’s complement signed integer||
|0x10|LT|3|VeryLowTier|Less-than comparison||
|0x11|GT|3|VeryLowTier|Greater-than comparison||
|0x12|SLT|3|VeryLowTier|Signed less-than comparison||
|0x13|SGT|3|VeryLowTier|Signed greater-than comparison||
|0x14|EQ|3|VeryLowTier|Equality comparison||
|0x15|ISZERO|3|VeryLowTier|Simple not operator||
|0x16|AND|3|VeryLowTier|Bitwise AND operation||
|0x17|OR|3|VeryLowTier|Bitwise OR operation||
|0x18|XOR|3|VeryLowTier|Bitwise XOR operation||
|0x19|NOT|3|VeryLowTier|Bitwise NOT operation||
|0x20|SHA3|30 + 6 * (size of input in words)|SpecialTier|Compute Keccak-256 hash|30 is the paid for the operation plus 6 paid for each word (rounded up) for the input data|
|0x30|ADDRESS|2|BaseTier|Get address of currently executing account||
|0x31|BALANCE|20|ExtTier|Simple not operator||
|0x32|ORIGIN|2|BaseTier|Get execution origination address||
|0x33|CALLER|2|BaseTier|Get caller address||
|0x34|CALLVALUE|2|BaseTier|Get deposited value by the instruction/transaction responsible for this execution||
|0x35|CALLDATALOAD|3|VeryLowTier|Get input data of current environment||
|0x36|CALLDATASIZE|2|BaseTier|Get size of input data in current environment||
|0x37|CALLDATACOPY|2 + 3 * (number of words copied, rounded up)|VeryLowTier|Copy input data in current environment to memory|2 is paid for the operation plus 3 for each word copied (rounded up)|
|0x38|CODESIZE|2|BaseTier|Get size of code running in current environment||
|0x39|CODECOPY|2 + 3 * (number of words copied, rounded up)|VeryLowTier|Copy code running in current environment to memory|2 is paid for the operation plus 3 for each word copied (rounded up)|
|0x3a|GASPRICE|2|BaseTier|Get price of gas in current environment||
|0x3b|EXTCODESIZE|20|ExtTier|Get size of an account’s code||
|0x3c|EXTCODECOPY|20 + 3 * (number of words copied, rounded up)|ExtTier|Copy an account’s code to memory|20 is paid for the operation plus 3 for each word copied (rounded up)|
|0x3d|RETURNDATASIZE|2|BaseTier|||
|0x3e|RETURNDATACOPY|3|VeryLowTier|||
|0x40|BLOCKHASH|20|ExtTier|Get the hash of one of the 256 most recent complete blocks||
|0x41|COINBASE|2|BaseTier|Get the block’s beneficiary address||
|0x42|TIMESTAMP|2|BaseTier|Get the block’s timestamp||
|0x43|NUMBER|2|BaseTier|Get the block’s number||
|0x44|DIFFICULTY|2|BaseTier|Get the block’s difficulty||
|0x45|GASLIMIT|2|BaseTier|Get the block’s gas limit||
|0x50|POP|2|BaseTier|Remove item from stack||
|0x51|MLOAD|3|VeryLowTier|Load word from memory||
|0x52|MSTORE|3|VeryLowTier|Save word to memory||
|0x53|MSTORE8|3|VeryLowTier|Save byte to memory||
|0x54|SLOAD|50|SpecialTier|Load word from storage||
|0x55|SSTORE|((value != 0) && (storage_location == 0)) ? 20000 : 5000|SpecialTier|Save word to storage|20000 is paid when storage value is set to non-zero from zero. 5000 is paid when the storage value's zeroness remains unchanged or is set to zero|
|0x56|JUMP|8|MidTier|Alter the program counter||
|0x57|JUMPI|10|HighTier|Conditionally alter the program counter||
|0x58|PC|2|BaseTier|Get the value of the program counter prior to the increment corresponding to this instruction||
|0x59|MSIZE|2|BaseTier|Get the size of active memory in bytes||
|0x5a|GAS|2|BaseTier|Get the amount of available gas, including the corresponding reduction for the cost of this instruction||
|0x5b|JUMPDEST|1|SpecialTier|Mark a valid destination for jumps||
|0x60..0x7f|PUSH1..32|3|VeryLowTier|Push a x-byte value onto the stack||
|0x80..0x8f|DUP1..16|3|VeryLowTier|Clone the i-th last value on the stack||
|0x90..0x9f|SWAP1..16|3|VeryLowTier|Swap the top of the stack with the i-th last element||
|0xa0|LOG0|375 + 8 * (number of bytes in log data)|SpecialTier|Append log record with no topics|375 is paid for operation plus 8 for each byte in data to be logged|
|0xa1|LOG1|375 + 8 * (number of bytes in log data)|SpecialTier|Append log record with two topics|375 is paid for operation plus 8 for each byte in data to be logged plus 2 * 375 for the 2 topics to be logged|
|0xa3|LOG3|375 + 8 * (number of bytes in log data)|SpecialTier|Append log record with three topics|375 is paid for operation plus 8 for each byte in data to be logged plus 3 * 375 for the 3 topics to be logged|
|0xa4|LOG4|375 + 8 * (number of bytes in log data)|SpecialTier|Append log record with four topics|375 is paid for operation plus 8 for each byte in data to be logged plus 4 * 375 for the 4 topics to be logged|
|0xf0|CREATE|32000|SpecialTier|Create a new account with associated code||
|0xf1|CALL|40|SpecialTier|Message-call into an account||
|0xf2|CALLCODE|40|SpecialTier|Message-call into this account with an alternative account’s code||
|0xf3|RETURN|0|ZeroTier|Halt execution returning output data||
|0xf4|DELEGATECALL|40|SpecialTier|Call a method in another contract, using the storage of the current contract||
|0xfa|STATICCALL|40|SpecialTier|Opcode that can be used to call another contract (or itself) while disallowing any modifications to the state during the call (and its subcalls, if present). Any opcode that attempts to perform such a modification (see below for details) will result in an exception instead of performing the modification||
|0xfd|REVERT|0|ZeroTier|The REVERT instruction will stop execution, roll back all state changes done so far and provide a pointer to a memory section, which can be interpreted as an error code or message. While doing so, it will not consume all the remaining gas||
|0xff|SUICIDE|0|ZeroTier|Halt execution and register account for later deletion||

 






