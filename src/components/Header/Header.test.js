import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Header from './Header';

test('render and check the <Header /> component', () => {
    const history = createMemoryHistory();

    // l'oggetto history deve essere splittato in due modi,
    // perché la location non viene più presa in maniera implicita
    // ma va passata a parte, così da avere un router implementato
    // lato node che abbia tutto il necessario per partire

    render(
        <Router location={history} navigator={history}>
            <Header />
        </Router>
    );

    const msg = screen.getByText('App');
    expect(msg).toBeInTheDocument();
});

test('render and check the <Header /> component with custom name', () => {
    const history = createMemoryHistory();

    render(
        <Router location={history.location} navigator={history}>
            <Header name={'Feisbrut'} />
        </Router>
    );

    const title = screen.getByText('Feisbrut');
    expect(title).toBeInTheDocument();
});

test('render and check the <Header/> component with custom with custom links', () => {
    const history = createMemoryHistory();
    const links = [
        { link: '/', label: 'Home' },
        { link: '/messages', label: 'Messages' },
        { link: '/friends', label: 'Friends' },
        { link: '/login', label: 'Login' },
    ];

    // ^ creo l'array di oggetti che poi passo al componente
    // che viene renderizzato nel test

    const { container } = render(
        <Router location={history.location} navigator={history}>
            <Header links={links} />
        </Router>);

    const lis = container.querySelectorAll('nav li');
    expect(lis.length).toBe(links.length);
});

// normalmente, l'oggetto history esiste già nel browser.
// lato node, però, questo oggetto non esiste e la funzione
// => const history = createMemoryHistory(); 
// ha il compito di crearla da zero con de valori predefiniti.
// viene poi quindi passato a router per consentirgli di 
// appoggiarsi a tale oggetto e non rompersi.
//* è un mezzo mock: 
// da una parte non lo è perché non si stanno usando
// funzionalità di jest, dall'altra lo è perché in pratica 
// si sta creando una nuova entità con la struttura dell'history  
// ma senza valori reali

// l'oggetto history è una virtualizzazione del router