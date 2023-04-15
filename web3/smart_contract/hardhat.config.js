// https://eth-mainnet.g.alchemy.com/v2/-5IsUaEFcfbReg9vt5P8bdao0W0uK3sN

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks : {
    goerli: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/-5IsUaEFcfbReg9vt5P8bdao0W0uK3sN',
      accounts: ['c4f83e4ea7783715e63f5a25b74ec5bff93f020f514d409d0120584961a6a214']
    }
  }
} 