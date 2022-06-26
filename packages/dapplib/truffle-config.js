require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remember smile just entire swallow slide'; 
let testAccounts = [
"0xf6d07a7b7da11f11872a2333b1bd461559f9475f7f7ac3a42b478b805f9bf19c",
"0x6e58a49aaa2c2a070dc16740b1217126aecd3e2edee06de597bc5bed7198912d",
"0xc842eb49a87a59dad2fa6c9bd76ada48a95057eaed461c4276a6816602367621",
"0xf469e076c344acfdded9bdfbc230e12b35a85b1714572caee49f9906414b1e06",
"0xad91e1b707d2d144300156bcf4cb2cda52400db3662d5581651ae53098be6a68",
"0x219332488bede4b39e873f4e9383e5da1fba2fe58bfc90e61b13284616106a5a",
"0xa74e14f3a7ab034e9974a754b2637b9a0b6cf5b71c6f31d27ea1965c43c49466",
"0x43ef4dbdf7bdf0159bb91622f6162994f6c0a2694b7d5d5e51561bb5ea7087f7",
"0x821f0c422bdd06af28c3769ef1ff18df9f9696e1601a106857a151e04fdc9bd4",
"0xa83011ed7fba21a7a22ce65de55ddaa35c8a64cf46d85cd9be0ca52407aa6b02"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

