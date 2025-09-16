document.addEventListener("DOMContentLoaded", function () {
    const calcSquare = (numIn) => {
        let elOut = document.querySelector("#theSquare");
        let result = numIn * numIn;
        elOut.textContent = result.toLocaleString();
    }

    const calcCube = (numIn) => {
        let elOut = document.querySelector("#theCube");
        let result = numIn * numIn * numIn;
        elOut.textContent = result.toLocaleString();
    }

    let elIn = document.querySelector("#theNumber");

    elIn.addEventListener("change", function () {
        calcSquare(parseInt(elIn.value));
    });
    elIn.addEventListener("change", function () {
        calcCube(parseInt(elIn.value));
    });
});