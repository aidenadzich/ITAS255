const message = function() {  
    console.log("This message is shown after 3 seconds");
}

function f1() {
    let j = 0;
    for (let i= 0; i < 300000000; i++)
        for (let k = 0; k < 40; k++)
            j = j +1;
    console.log("Done f1");
}

function main() {
    console.log("Starting main");
    setTimeout(message, 3000);
    f1();
}

main();