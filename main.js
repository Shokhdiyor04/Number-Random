'use strict';

let url = "http://numbersapi.com/";

const number = document.getElementById('number'),
    value = document.getElementById('value');

let finalUrl;


document.getElementById('check').addEventListener('click', (e) => {
    e.preventDefault();
    finalUrl = number.value

    if (finalUrl !== "") {
        if (finalUrl > 0 && finalUrl <= 1000) {
            fetch(url + finalUrl)
                .then(res => res.text())
                .then(text => {
                    value.innerHTML = `
                        <h1>${finalUrl}</h1>
                        <p>${text}</p>
                    `
                })
        } else {
            value.innerHTML = `
            <p class="error">Enter a number between 0 and 1000</p>
        `
        }
    } else {
        value.innerHTML = `
            <p class="error">You must enter a value</p>
        `
    }
    number.value = ""
})

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    let RandomNumber = Math.floor(Math.random() * 1000);
    fetch(url + RandomNumber)
        .then(res => res.text())
        .then(text => {
            value.innerHTML = `
                <h1>${RandomNumber}</h1>
                <p>${text}</p>
            `
        })
})