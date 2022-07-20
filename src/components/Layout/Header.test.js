import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import theme from '../../theme';

const setup = () => render(
    <ThemeProvider theme={theme}>
        <Header />
    </ThemeProvider>
);

describe('<Header />', () => {
    beforeEach(() => {
    });

    afterEach(() => {
        cleanup();
    });

    it('should contain a navigation', () => {
        setup();
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });
});
