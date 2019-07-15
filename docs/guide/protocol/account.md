# Account
## Account Creation

You can generate an offline keypair, which includes an address and a private key, that will not be recorded by MCASH. The user address generation algorithm is as follows: 

1. Generate a key pair and extract the public key (a 64-byte byte array representing its x,y coordinates).
2. Hash the public key using sha3-256 function and extract the last 20 bytes of the result.
3. Add 0x32 to the beginning of the byte array. Length of the initial address should be 21 bytes.
4. Hash the address twice using sha256 function and take the first 4 bytes as verification code.
5. Add the verification code to the end of the initial address and get an address in base58check format through base58 encoding.
6. An encoded Mainnet address begins with M and is 34 bytes in length.
