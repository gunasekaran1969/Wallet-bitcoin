// BitNova Wallet

function openTestnetWallet() {

    const walletBox = document.getElementById("testnetWallet");
    const addressBox = document.getElementById("testnetAddress");
    const statusBox = document.getElementById("walletStatus");

    walletBox.classList.remove("hidden");
    walletBox.style.display = "block";

    statusBox.innerText = "Checking wallet engine...";

    // The bundle may expose the function through the browser global.
    ;const walletFunction =
    window.createBitNovaTestnetWallet;

console.log(
    "BitNovaReady:",
    window.BitNovaReady
);

console.log(
    "Wallet function:",
    typeof window.createBitNovaTestnetWallet
);

    if (typeof walletFunction !== "function") {

        statusBox.innerText = "Wallet engine not available.";

        addressBox.innerHTML =
            "The Bitcoin library loaded, but the wallet function " +
            "was not exposed to the page.";

        return;
    }

    try {

        statusBox.innerText =
            "Generating Bitcoin Testnet address...";

        const wallet = walletFunction();

        if (!wallet || !wallet.address) {
            throw new Error(
                "No testnet address was returned."
            );
        }

        addressBox.innerHTML =
            "<strong>Bitcoin Testnet Address:</strong><br><br>" +
            "<span style='word-break:break-all;'>" +
            wallet.address +
            "</span>";

        statusBox.innerText =
            "Testnet wallet created successfully.";

    } catch (error) {

        console.error(error);

        statusBox.innerText =
            "Wallet creation failed.";

        addressBox.innerText =
            error.message;
    }
}


function sendBitcoin() {

    alert(
        "Send Bitcoin will be added after testnet wallet verification."
    );

}


function receiveBitcoin() {

    alert(
        "Receive Bitcoin will be added after testnet wallet verification."
    );

}


function copyAddress() {

    const element =
        document.getElementById("testnetAddress");

    const address =
        element.innerText.trim();

    if (!address ||
        address.includes("No address") ||
        address.includes("not available")) {

        alert("Create a testnet wallet first.");
        return;
    }

    navigator.clipboard.writeText(address)
        .then(function () {

            alert("Testnet address copied.");

        })
        .catch(function () {

            alert(
                "Copy failed. Please copy the address manually."
            );

        });
}
