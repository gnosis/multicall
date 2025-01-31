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
| Mainnet | [0xeefba1e63905ef1d7acba5a8513c70307c1ce441](https://etherscan.io/address/0xeefba1e63905ef1d7acba5a8513c70307c1ce441#contracts) |
| Kovan   | [0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a](https://kovan.etherscan.io/address/0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a#contracts) |
| Rinkeby | [0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821](https://rinkeby.etherscan.io/address/0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821#contracts) |
| Görli   | [0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e](https://goerli.etherscan.io/address/0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e#contracts) |
| Ropsten | [0x53c43764255c17bd724f74c4ef150724ac50a3ed](https://ropsten.etherscan.io/address/0x53c43764255c17bd724f74c4ef150724ac50a3ed#code) |
| xDai    | [0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a](https://blockscout.com/poa/dai/address/0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a) |
| Polygon | [0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507](https://explorer-mainnet.maticvigil.com/address/0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507/contracts)
| Mumbai  | [0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc](https://explorer-mumbai.maticvigil.com/address/0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc/transactions)
| RSK Testnet   | [0x4eeebb5580769ba6d26bfd07be636300076d1831](https://explorer.testnet.rsk.co/address/0x4eeebb5580769ba6d26bfd07be636300076d1831) |
| RSK Mainnet   | [0x4eeebb5580769ba6d26bfd07be636300076d1831](https://explorer.rsk.co/address/0x4eeebb5580769ba6d26bfd07be636300076d1831) |


### Multicall2 Contract Addresses
Multicall2 is the same as Multicall, but allows to send transactions not just calls and provides additional functions that allow calls within the batch to fail. Useful for situations where a call may fail depending on the state of the contract.

| Chain   | Address |
| ------- | ------- |
| Mainnet | [0x5ba1e12693dc8f9c48aad8770482f4739beed696](https://etherscan.io/address/0x5ba1e12693dc8f9c48aad8770482f4739beed696#contracts) |
| Kovan   | [0x5ba1e12693dc8f9c48aad8770482f4739beed696](https://kovan.etherscan.io/address/0x5ba1e12693dc8f9c48aad8770482f4739beed696#contracts) |
| Rinkeby | [0x5ba1e12693dc8f9c48aad8770482f4739beed696](https://rinkeby.etherscan.io/address/0x5ba1e12693dc8f9c48aad8770482f4739beed696#contracts) |
| Görli   | [0x5ba1e12693dc8f9c48aad8770482f4739beed696](https://goerli.etherscan.io/address/0x5ba1e12693dc8f9c48aad8770482f4739beed696#contracts) |
| Ropsten | [0x5ba1e12693dc8f9c48aad8770482f4739beed696](https://ropsten.etherscan.io/address/0x5ba1e12693dc8f9c48aad8770482f4739beed696#code) |
| xDai | [0x08612d3C4A5Dfe2FaaFaFe6a4ff712C2dC675bF7](https://blockscout.com/xdai/mainnet/address/0x08612d3C4A5Dfe2FaaFaFe6a4ff712C2dC675bF7/contracts) |
| Arbitrum | [0x021CeAC7e681dBCE9b5039d2535ED97590eB395c](https://arbiscan.io/address/0x021CeAC7e681dBCE9b5039d2535ED97590eB395c)
| Fantom | [0xD98e3dBE5950Ca8Ce5a4b59630a5652110403E5c](https://ftmscan.com/address/0xD98e3dBE5950Ca8Ce5a4b59630a5652110403E5c)
| Binance | [0xed386Fe855C1EFf2f843B910923Dd8846E45C5A4](https://bscscan.com/address/0xed386Fe855C1EFf2f843B910923Dd8846E45C5A4#code)
| Avalanche | [0xAbeC56f92a89eEe33F5194Ca4151DD59785c2C74](https://snowtrace.io/address/0xAbeC56f92a89eEe33F5194Ca4151DD59785c2C74#code)
| RSK Testnet   | [0xaf7be1ef9537018feda5397d9e3bb9a1e4e27ac8](https://explorer.testnet.rsk.co/address/0xaf7be1ef9537018feda5397d9e3bb9a1e4e27ac8) |
| RSK Mainnet   | [0x8f344c3b2a02a801c24635f594c5652c8a2eb02a](https://explorer.rsk.co/address/0x8f344c3b2a02a801c24635f594c5652c8a2eb02a) |
