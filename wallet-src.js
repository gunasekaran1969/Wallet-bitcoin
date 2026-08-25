const bitcoin = require("bitcoinjs-lib");
const bip39 = require("bip39");
const ecc = require("tiny-secp256k1");
const { BIP32Factory } = require("bip32");

const bip32 = BIP32Factory(ecc);

function createTestnetWallet() {

    const network = bitcoin.networks.testnet;

    const mnemonic = bip39.generateMnemonic(128);

    const seed = bip39.mnemonicToSeedSync(mnemonic);

    const root = bip32.fromSeed(seed, network);

    const path = "m/84'/1'/0'/0/0";

    const child = root.derivePath(path);

    const payment = bitcoin.payments.p2wpkh({
        pubkey: Buffer.from(child.publicKey),
        network: network
    });

    return {
        address: payment.address,
        mnemonic: mnemonic
    };
}

window.createTestnetWallet = createTestnetWallet;
