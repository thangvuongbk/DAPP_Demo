//var HDWalletProvider = require("truffle-hdwallet-provider");
//const MNEMONIC = 'EE755A0B796BE0992994FE197911624AD98B34A89A81CBEF4988E0569C440874';

var PrivateKeyProvider = require("truffle-privatekey-provider");
var privateKey = 'F66101D0009C69590A650FB7C22E60B493F6E25BD95B7E5DBF11DFBA81A1D6C8';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {    
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*" // match any network id
    },    
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4,
      gas: 4700000
    },       
    ropsten: {
      provider: function() {
        return new PrivateKeyProvider(privateKey, "https://ropsten.infura.io/v3/c567e6deb0c74854b5b0b83758d3f09a")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};
