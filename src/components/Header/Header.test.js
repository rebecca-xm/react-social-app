import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Header from './Header';

test('render and check the <Header /> component', () => {
    const history = createMemoryHistory();

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

    const { container } = render(
        <Router location={history.location} navigator={history}>
            <Header links={links} />
        </Router>);

    const lis = container.querySelectorAll('nav li');
    expect(lis.length).toBe(lis.length);
});

// l'oggetto history è una virtualizzazione del router