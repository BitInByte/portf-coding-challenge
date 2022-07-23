import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import DateRangePicker from './DateRangePicker';

const setup = () => render(
    <DateRangePicker />
);

describe('<DateRangePicker />', () => {
    beforeEach(() => {
    });

    afterEach(() => {
        cleanup()
    });

    it('should render the element', () => {
        setup();
        const el = screen.getByTestId('date-range-picker');
        expect(el).toBeInTheDocument();
    });

});
