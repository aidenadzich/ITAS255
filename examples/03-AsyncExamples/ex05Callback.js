function f1() {
    let j = 0;
    for (let i= 0; i < 300000000; i++)
        j = j +1;
    console.log("Done f1");
}

function f2(p1) {
    let a = "a";
    for (let i=0; i<1000000; i++)
        a = a + "a";
    console.log("Done f2");
    p1();
}

console.log("Starting");
f2(f1);


// ((p1 = () => {
//     let j = 0;
//     for (let i= 0; i < 300000000; i++)
//         j = j +1;
//     console.log("Done f1");
// }) => {
//     let a = "a";
//     for (let i=0; i<1000000; i++)
//         a = a + "a";
//     console.log("Done f2");
//     p1();
// })()
