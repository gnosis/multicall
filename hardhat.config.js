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
      tags: ["test", "local"]
    },
    avalanche: {
      live: true,
      url: 'https://api.avax.network/ext/bc/C/rpc',
      chainId: 43114,
      accounts: {
        mnemonic: mnemonic
      },
      tags: ["staging"]
    },
    optimistic: {
      live: true,
      url: 'https://mainnet.optimism.io',
      chainId: 10,
      accounts: {
        mnemonic: mnemonic
      }
    }
  },
};

