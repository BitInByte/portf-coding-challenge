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

    it('should contain start date input', () => {
        setup();
        const startDateInput = screen.getByTestId('start-date');
        expect(startDateInput).toBeInTheDocument();
    });

    it('should contain end date input', () => {
        setup();
        const endDateInput = screen.getByTestId('end-date');
        expect(endDateInput).toBeInTheDocument();
    });

    it('should contain ABV filter input', () => {
        setup();
        const abvFilterInput = screen.getByTestId('abv-filter');
        expect(abvFilterInput).toBeInTheDocument();
    });
});
