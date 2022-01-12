import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// per testare i componenti react non bastano le utility di jest
// ecco il motivo della presenza delle utility (render, screen) importate da testing-library

// la funzione render serve a simulare la renderizzazione del componente da testare
// allo stato attuale, il test cerca all'interno del documento la presenza del testo 'learn react'
//                                     getByText => toBeInTheDocument()
