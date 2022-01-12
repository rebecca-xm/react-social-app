import { greetings } from './../utils';

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