// BitNova Wallet

function openTestnetWallet() {

    const walletBox = document.getElementById("testnetWallet");
    const addressBox = document.getElementById("testnetAddress");
    const statusBox = document.getElementById("walletStatus");

    walletBox.classList.remove("hidden");
    walletBox.style.display = "block";

    statusBox.innerText = "Checking wallet engine...";

    if (typeof window.createBitNovaTestnetWallet === "function") {

        statusBox.innerText = "Wallet engine loaded.";

        try {

            const wallet =
                window.createBitNovaTestnetWallet();

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
                "Wallet engine loaded, but wallet creation failed.";

            addressBox.innerText =
                error.message;
        }

    } else {

        statusBox.innerText =
            "Wallet engine NOT loaded.";

        addressBox.innerHTML =
            "The wallet bundle has not loaded correctly.<br><br>" +
            "<strong>We will fix the bundle connection next.</strong>";
    }
}


function sendBitcoin() {

    alert(
        "Send Bitcoin will be added after the testnet wallet is verified."
    );

}


function receiveBitcoin() {

    alert(
        "Receive Bitcoin will be added after the testnet wallet is verified."
    );

}


function copyAddress() {

    const element =
        document.getElementById("testnetAddress");

    const address =
        element.innerText.trim();

    if (!address || address.includes("not loaded")) {

        alert("Create the testnet wallet first.");
        return;

    }

    navigator.clipboard.writeText(address)
        .then(function () {

            alert("Testnet address copied.");

        })
        .catch(function () {

            alert("Please copy the address manually.");

        });

}
