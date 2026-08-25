// BitNova Wallet
// TESTNET ONLY

const NETWORK = bitcoinjslib.networks.testnet;

function createTestnetWallet() {

    try {

        const keyPair = bitcoinjslib.ECPair.makeRandom({
            network: NETWORK
        });

        const payment = bitcoinjslib.payments.p2wpkh({
            pubkey: keyPair.publicKey,
            network: NETWORK
        });

        if (!payment.address) {
            throw new Error("Could not create wallet address.");
        }

        document.getElementById("walletAddress").innerText =
            payment.address;

        alert(
            "Testnet wallet created successfully!\n\n" +
            "Address:\n" +
            payment.address +
            "\n\nIMPORTANT:\n" +
            "This is a TESTNET wallet only."
        );

    } catch (error) {

        console.error(error);

        alert(
            "Wallet creation failed.\n\n" +
            error.message
        );
    }
}
