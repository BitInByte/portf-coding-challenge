import { useState } from 'react';
import styled from 'styled-components';
import { DateRangePicker as DateRangePickerLib } from 'rsuite';

const DateRangePickerEl = styled(DateRangePickerLib)`
  * {
    font-size: 1.6rem;
  }
  div {
    padding: 1rem !important;
    margin: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2) !important;
    border-radius: 1rem;
    line-height: ${(props) => props.theme.typography.lineHeight};
  }
`;

function DateRangePicker() {
  const [datePickedState, setDatePickedState] = useState([]);

  const onDatePickerChangeHandler = (event) => {
    setDatePickedState(event);
  };

  return (
    <div data-testid="date-range-picker">
      <DateRangePickerEl onChange={onDatePickerChangeHandler} />
    </div>
  );
}

export default DateRangePicker;
