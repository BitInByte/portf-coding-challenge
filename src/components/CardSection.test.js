import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

import CardSection from './CardSection';

const setup = () => render(
    <ThemeProvider theme={theme}>
        <CardSection title="test title" />
    </ThemeProvider>
);

describe('<CardSection />', () => {
    beforeEach(() => {
    });

    afterEach(() => {
        cleanup();
    });

    it('should render section correctly', () => {
        setup();
        const card = screen.getByTestId('card-section');
        expect(card).toBeInTheDocument();
    });

    it('should contain title props rendered as a title', () => {
        setup();
        const card = screen.getByTestId('card-section');
        expect(card).toHaveTextContent('test title');
    });

    it('should contain children rendered', () => {
        setup();
        const card = screen.getByTestId('card-section');
        expect(card.childElementCount).toBeGreaterThan(1);
    });

});
