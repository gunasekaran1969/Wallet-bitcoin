// ======================================
// BitNova Wallet
// Bitcoin Testnet Prototype
// ======================================

function createWallet() {

    const walletCard =
        document.getElementById("walletCard");

    const status =
        document.getElementById("status");

    const address =
        document.getElementById("address");

    walletCard.classList.remove("hidden");

    status.innerText =
        "Checking wallet engine...";

    address.innerText =
        "Please wait...";


    // Check whether the compiled wallet
    // has exposed the function.

    if (
        typeof window.createBitNovaTestnetWallet !==
        "function"
    ) {

        status.innerText =
            "Wallet engine is not available.";

        address.innerText =
            "The wallet engine did not expose the required function.";

        console.error(
            "createBitNovaTestnetWallet is missing."
        );

        return;
    }


    try {

        status.innerText =
            "Generating Bitcoin Testnet wallet...";


        const wallet =
            window.createBitNovaTestnetWallet();


        if (
            !wallet ||
            !wallet.address
        ) {

            throw new Error(
                "The wallet engine did not return an address."
            );
        }


        address.innerText =
            wallet.address;


        status.innerText =
            "Bitcoin Testnet wallet created successfully.";


        console.log(
            "BitNova Testnet Address:",
            wallet.address
        );


    } catch (error) {

        console.error(
            "BitNova wallet error:",
            error
        );


        status.innerText =
            "Wallet creation failed.";


        address.innerText =
            error.message;
    }
}


// ======================================
// Copy address
// ======================================

function copyAddress() {

    const address =
        document.getElementById("address")
            .innerText
            .trim();


    if (
        !address ||
        address === "No address generated yet." ||
        address === "Please wait..."
    ) {

        alert(
            "Create the wallet first."
        );

        return;
    }


    navigator.clipboard.writeText(address)
        .then(function () {

            alert(
                "Testnet address copied."
            );

        })
        .catch(function () {

            alert(
                "Copy failed. Please copy the address manually."
            );

        });
}


// ======================================
// Send
// ======================================

function sendBitcoin() {

    alert(
        "Send Bitcoin will be added after the Testnet wallet is verified."
    );
}


// ======================================
// Receive
// ======================================

function receiveBitcoin() {

    alert(
        "Receive Bitcoin will be added after the Testnet wallet is verified."
    );
}
