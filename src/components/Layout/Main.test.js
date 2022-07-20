import '@testing-library/jest-dom';
import { render, cleanup, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Main from './Main';

const setup = () => render(
    <ThemeProvider theme={theme}>
        <Main>
            <p>Children</p>
        </Main>
    </ThemeProvider>
);

describe('<Main />', () => {
    it('should render Main correctly', () => {
        setup();
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });
});
