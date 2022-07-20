import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Layout from './Layout';

const setup = () => render(<Layout />);

describe('<Layout />', () => {

    beforeEach(() => {
    });

    afterEach(() => {
        cleanup();
    })

    it('should contain a header element', () => {
        setup();
        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();
    });

    it('should contain a main element', () => {
        setup();
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });

    it('should contain content on main element', () => {
        setup();
        const main = screen.getByRole('main');
        expect(main.childElementCount).toBeGreaterThan(0);
    });

    it('should contain a footer element', () => {
        setup();
        const main = screen.getByRole('contentinfo');
        expect(main).toBeInTheDocument();
    });


});
