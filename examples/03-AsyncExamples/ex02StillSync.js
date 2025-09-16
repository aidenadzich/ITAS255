function f1() {
    let j = 0;
    for (let i= 0; i < 300000000; i++)
        for (let k = 0; k < 4; k++)
            j = j +1;
    console.log("Done f1");
}

function f2() {
    let a = "a";
    for (let i=0; i<1000000; i++)
        a = a + "a";
    f1();
    console.log("Done f2");
}

function f3() {
    let b = true;
    for (let i=0; i<100000000; i++)
        b = !b;
    f2();
    console.log("Done f3");
}


f3();