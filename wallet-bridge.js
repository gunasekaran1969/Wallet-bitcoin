(function () {

    console.log("BitNova bridge loaded");

    if (typeof window.createBitNovaTestnetWallet === "function") {

        console.log("BitNova wallet engine detected.");

        window.BitNovaReady = true;

    } else {

        console.error(
            "BitNova wallet engine was not detected."
        );

        window.BitNovaReady = false;
    }

})();
