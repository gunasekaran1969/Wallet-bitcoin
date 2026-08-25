// BitNova Wallet
// Bitcoin Testnet development

function openTestnetWallet() {

    const walletBox =
        document.getElementById("testnetWallet");

    walletBox.style.display = "block";

    document.getElementById("testnetAddress").innerText =
        "Secure testnet address generation will be connected next.";

}

function sendBitcoin() {

    alert(
        "Send Bitcoin\n\n" +
        "Testnet sending will be added after wallet creation."
    );

}

function receiveBitcoin() {

    alert(
        "Receive Bitcoin\n\n" +
        "Testnet receiving will be added after wallet creation."
    );

}
