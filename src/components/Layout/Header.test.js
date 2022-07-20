import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

const setup = () => render(<Header />);

describe('<Header />', () => {
    it('should contain a navigation', () => {
        setup();
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });
});
