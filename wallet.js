// BitNova Wallet
// Bitcoin TESTNET only

function openTestnetWallet() {

    const walletBox = document.getElementById("testnetWallet");
    const addressBox = document.getElementById("testnetAddress");

    walletBox.style.display = "block";

    addressBox.innerText = "Creating secure testnet wallet...";

    try {

        if (typeof window.createBitNovaTestnetWallet !== "function") {
            throw new Error("Wallet engine is not loaded.");
        }

        const wallet = window.createBitNovaTestnetWallet();

        addressBox.innerHTML =
            "<strong>Testnet Address:</strong><br><br>" +
            "<span style='word-break:break-all;'>" +
            wallet.address +
            "</span>";

        console.log("BitNova Testnet Address:", wallet.address);

    } catch (error) {

        console.error(error);

        addressBox.innerText =
            "Wallet creation failed: " + error.message;
    }
}

function sendBitcoin() {

    alert(
        "Send Bitcoin\n\n" +
        "Testnet sending will be added after the wallet is verified."
    );
}

function receiveBitcoin() {

    alert(
        "Receive Bitcoin\n\n" +
        "Your testnet address will appear here."
    );
}
