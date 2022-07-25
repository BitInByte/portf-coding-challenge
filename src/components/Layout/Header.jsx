import styled from 'styled-components';
import { Div } from '../Card';
import CardSection from '../CardSection';
import DateRangePicker from '../DateRangePicker';

const HeaderEl = styled(Div).attrs({
  as: 'header',
})``;

const Nav = styled.nav`
  width: 100%;
  display: flex;
`;

function Header() {
  return (
    <HeaderEl>
      <Nav>
        <CardSection title="Date Filter">
          <DateRangePicker />
        </CardSection>
        <CardSection title="Filter by ABV">
          <div>
            <input placeholder="Insert a value..." data-testid="abv-filter" />
          </div>
        </CardSection>
      </Nav>
    </HeaderEl>
  );
}

export default Header;
