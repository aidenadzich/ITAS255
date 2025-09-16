//=============================================================\\
// Promises method
//=============================================================\\

const functionThatTakesALongTime = new Promise(function(resolve, reject) {
    //todo: something that takes a long time
    functionToGetData();
    if (success) {
        resolve(data)
    } else {
        reject(error)
    }
});

function getData() {
    functionThatTakesALongTime
        .then((result) => {
            //todo: Do cool things with the data in result
        })
        .error((error) => {
            console.log(error);
        })
}

//=============================================================\\
// async/await method
//=============================================================\\

async function getDataAsync() {
    let result = await functionToGetData();
    //todo: Do cool things with the data in result
}