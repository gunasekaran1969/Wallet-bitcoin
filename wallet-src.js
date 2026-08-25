const bitcoin = require("bitcoinjs-lib");
const ecc = require("tiny-secp256k1");
const BIP32Factory = require("bip32").BIP32Factory;
const bip39 = require("bip39");

bitcoin.initEccLib(ecc);

const bip32 = BIP32Factory(ecc);

window.createBitNovaTestnetWallet = function () {

    const network = bitcoin.networks.testnet;

    const mnemonic = bip39.generateMnemonic(128);

    const seed = bip39.mnemonicToSeedSync(mnemonic);

    const root = bip32.fromSeed(seed, network);

    const child = root.derivePath(
        "m/84'/1'/0'/0/0"
    );

    const payment = bitcoin.payments.p2wpkh({
        pubkey: Buffer.from(child.publicKey),
        network: network
    });

    if (!payment.address) {
        throw new Error("Unable to create testnet address.");
    }

    return {
        address: payment.address,
        mnemonic: mnemonic
    };
};
