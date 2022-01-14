//* PROVA TEST => utils.test.js

const greetings = (name) => `Hello dear ${name}`;

const doFetch = () =>
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json());

export { greetings, doFetch };