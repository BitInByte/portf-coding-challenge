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

  .rs-picker-toggle-value,
  .rs-picker-toggle-placeholder {
    margin-right: 2rem;
  }

  @media only screen and (max-width: 28.126em) {
    display: flex;
    div {
      margin: 0;
    }
  }
`;

function DateRangePicker() {
  const [datePickedState, setDatePickedState] = useState([]);

  const onDatePickerChangeHandler = (event) => {
    setDatePickedState(event);
  };

  return (
    <div data-testid="date-range-picker">
      <DateRangePickerEl onChange={onDatePickerChangeHandler} showOneCalendar />
    </div>
  );
}

export default DateRangePicker;
