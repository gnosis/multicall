# Multicall <img width="100" align="right" alt="Multicall" src="https://user-images.githubusercontent.com/304108/55666937-320cb180-5888-11e9-907b-48ba66150523.png" />

Multicall aggregates results from multiple contract constant function calls.

This reduces the number of separate JSON RPC requests that need to be sent
(especially useful if using remote nodes like Infura), while also providing the
guarantee that all values returned are from the same block (like an atomic read)
and returning the block number the values are from (giving them important
context so that results from old blocks can be ignored if they're from an
out-of-date node).

For use in front-end dapps, this smart contract is intended to be used with
[Multicall.js](https://github.com/makerdao/multicall.js).

### Contract Addresses
| Chain   | Address |
| ------- | ------- |
| RSK Testnet   | [0x9e469e1fc7fb4c5d17897b68eaf1afc9df39f103](https://explorer.testnet.rsk.co/address/0x9e469e1fc7fb4c5d17897b68eaf1afc9df39f103) |
| RSK Mainnet   | [0x6c62bf5440de2cb157205b15c424bceb5c3368f5](https://explorer.rsk.co/address/0x6c62bf5440de2cb157205b15c424bceb5c3368f5) |
