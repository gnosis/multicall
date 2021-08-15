require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-truffle5");
require('solidity-coverage');
require('hardhat-gas-reporter');
require('hardhat-deploy');
require('hardhat-abi-exporter');

require('dotenv').config()


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
// 0xa975d1de6d7da3140e9e293509337373402558be
const mnemonic = process.env.MNEMONIC || 'digital unknown jealous mother legal hedgehog save glory december universe spread figure custom found six'
console.log('mnemonic', mnemonic)
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.5.17",
    settings: {
      evmVersion: 'istanbul',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 0.06
  },
  abiExporter: {
    clear: true,
    flat: true,
    only: [':Multicall$',':Multicall2$']
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    owner: {
      default: 1
    },
  },
  networks: {
    hardhat: {
      live: false,
      blockGasLimit: 6800000,
      gasPrice: 60000000,
      hardfork: "berlin", // London hardfork is incompatible with RSK gasPrice
      tags: ["test", "local"]
    },
    rsktestnet: {
      live: true,
      url: 'https://public-node.testnet.rsk.co',
      blockGasLimit: 6800000,
      gasPrice: 60000000, // 0.06 gwei
      chainId: 31,
      hardfork: "berlin", // London hardfork is incompatible with RSK gasPrice
      accounts: {
        mnemonic: mnemonic
      },
      tags: ["staging"]
    },
    rskmainnet: {
      live: true,
      url: 'https://public-node.rsk.co',
      blockGasLimit: 6800000,
      gasPrice: 60000000, // 0.06 gwei
      chainId: 30,
      hardfork: "berlin", // London hardfork is incompatible with RSK gasPrice
      accounts: {
        mnemonic: mnemonic
      }
    }
  },
};

