require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give knife fortune shoulder name reflect noise social jazz civil army gift'; 
let testAccounts = [
"0x72616d2481d2ba1465314a6f4ae8ec4b7ffbc8aeb9b612047b2f4370c943ff00",
"0xbbc31f3a0a2fa07f318d60c90741e4a283d418422df4cefc47acf440aa621775",
"0x83cc8e19aaa9f7917fd0d87854d40f262aeeb8586c2e4bb711d8f04b25f838c5",
"0xc7bb8715f5c52cecc8288213bafe338cbb85f72990d52c1f34343cc419de40a0",
"0x8b0df9c194fa8742862ed63d1839c59a890f01a965f1953641a647fa53292cd7",
"0xbc6f7232b66e5cab16b4213ee8e57d221cba996e0380273acd1035ed630a755a",
"0x224698513c119595085440734e48179035b437628cb838463d7f262d260cc519",
"0x1e2737378aab7e6ec9ebf512ff707ad158254d68ff429de0cece6e8c65ff09e4",
"0xc1e0d80bf5d4f51c19be1f0a752d6a706b0d8581923353c36d39c712f03baba6",
"0xc77cf4be245202d32af7ce2d9fe3bc35724358e222c72946af0a534459921500"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


