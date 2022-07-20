import '@testing-library/jest-dom';
import { render, cleanup, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Card from './Card';
import theme from '../theme';

const setup = () => render(
    <ThemeProvider theme={theme}>
        <Card>
            <p>Children</p>
        </Card>
    </ThemeProvider>
);

describe('<Card />', () => {
    beforeEach(() => {
    });

    afterEach(() => {
        cleanup();
    });

    it('should render card correctly', () => {
        setup();
        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument();
    });

    it('should render children', () => {
        setup();
        const childrenLength = screen.getByTestId('card').childElementCount;
        expect(childrenLength).toBeGreaterThan(0);
    });
});
