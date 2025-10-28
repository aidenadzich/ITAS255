window.addEventListener('load', () => {
    for (let i=0; i<6; i++) {
        document.querySelector("section").innerHTML +=
            `<p>Counting ${i}</p>`;
    }
})