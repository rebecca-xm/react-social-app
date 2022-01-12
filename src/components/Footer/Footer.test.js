import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('render and check the <Footer /> component', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    const msg = screen.getByText(`Copyright Edgemony - ${year}`);
    expect(msg).toBeInTheDocument();
});

test('check markup in <Footer /> component', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    const p = container.querySelector('footer p');
    const hr = container.querySelector('footer hr');
    
    expect(footer).toBeTruthy();
    expect(p).toBeTruthy();
    expect(hr).toBeTruthy();
});