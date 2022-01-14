import { greetings, doFetch } from './../utils';

it('test greetings() function', () => {
    const result = greetings('Rebecca');
    expect(result).toBe('Hello dear Rebecca');
});

// expect è un'utility di jest a cui passo il valore che intendo testare
// mentre a toBe passo il valore che vorrei ottenere

// it ('test greetings() function without passing a parameter', () => {
//     const result = greetings();
//     expect(result).toBe('Hello dear Rebecca');
// });

// grazie al secondo test capisco che è meglio impostare un valore di default

it('testing an array', () => {
    const arr = [1, 2, 3];
    expect(arr).toEqual([1, 2, 3]);
});

// toBe smette di essere efficace con oggetti complessi
// in quel caso è meglio sostituirlo con toEqual

it('check doFetch function', async () => {
    const result = await doFetch();
    expect(result).toEqual({
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    });
});

// Jest gestisce alla stessa maniera sia i test sincroni
// che quelli asincroni.
// L'unica cosa che devo fare, in questo caso, è istruirlo
// sul fatto che questa funzione è asincrona.
// Per fare ciò, inserisco la parola chiave 'async' prima
// della funzione e 'await' davanti al mio doFetch.