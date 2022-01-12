import { render, screen } from '@testing-library/react';
import Loading from "../../components/Loading";

test('render and check the <Loading /> component', () => {
    render(<Loading />);
    const msg = screen.getByText('Loading...');
    expect(msg).toBeInTheDocument();
});

test('check markup in <Loading /> component', () => {
    const { container } = render(<Loading />);
    const div = container.querySelector('div');

    expect(div).toBeTruthy();
});