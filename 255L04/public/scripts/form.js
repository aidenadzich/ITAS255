const el = document.querySelector('#sendBtn');
const outEl = document.querySelector('section');
const field = document.querySelector('#myForm input[name="num"');

el.addEventListener('click', () => {

    const payload = { [field.name]: field.value };

    fetch('/sendfetch', {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(json => {
        outEl.innerHTML = Object.entries(json)
            .map(([k, v]) => `<div><strong>${k}</strong>: ${v}</div>`)
            .join('');
    })
    .catch(err => {
        console.error(`Request failed`, err);
        outEl.textContent = `Request Failed`;
    })
});