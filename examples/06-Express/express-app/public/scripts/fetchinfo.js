const el = document.querySelector('button');
const outEl = document.querySelector('section');
const sendData = {
    'a': 'alligator',
    'b': 'barracuda',
    'c': 'catfish',
    'd': 'dolphin'
};

// You need to fetch the information using the proper route on the server. Make sure you match the verb/command as well
el.addEventListener('click', () => {
    fetch('/getjson', {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sendData)
    }).then(gotStuff => {
        console.log(`Response object: ${gotStuff}`);
        return gotStuff.json();
    }).then(jsonStuff => {
        console.log(jsonStuff);
        outEl.innerHTML = jsonStuff.c;
    }).catch(error => {
        console.log(`Request failed: ${error.stack}`);
    });
});