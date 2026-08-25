// BitNova Wallet
// Bitcoin TESTNET ONLY

function openTestnetWallet() {

    const walletBox = document.getElementById("testnetWallet");
    const addressBox = document.getElementById("testnetAddress");

    walletBox.style.display = "block";
    addressBox.innerText = "Creating secure testnet wallet...";

    setTimeout(function () {

        try {

            if (typeof window.createBitNovaTestnetWallet !== "function") {
                throw new Error(
                    "Wallet engine is not loaded. Please refresh the page after GitHub Pages finishes publishing."
                );
            }

            const wallet =
                window.createBitNovaTestnetWallet();

            addressBox.innerHTML =
                "<strong>Bitcoin Testnet Address:</strong><br><br>" +
                "<span style='word-break:break-all;'>" +
                wallet.address +
                "</span>" +
                "<br><br>" +
                "<small>TESTNET ONLY — Do not send real Bitcoin.</small>";

        } catch (error) {

            console.error(error);

            addressBox.innerText =
                "Wallet creation failed: " +
                error.message;
        }

    }, 300);
}


function sendBitcoin() {

    alert(
        "Send Bitcoin\n\n" +
        "Testnet sending will be added after wallet verification."
    );

}


function receiveBitcoin() {

    alert(
        "Receive Bitcoin\n\n" +
        "Your Bitcoin Testnet address will appear here."
    );

}
