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

  @media only screen and (max-width: 28.126em) {
    flex-direction: column;
  }
`;

const FilterEl = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderEl>
      <Nav>
        <CardSection title="Date Filter">
          <DateRangePicker />
        </CardSection>
        <CardSection title="Filter by ABV">
          <FilterEl>
            <input
              placeholder="Insert a value..."
              data-testid="abv-filter"
              type="number"
            />
          </FilterEl>
        </CardSection>
      </Nav>
    </HeaderEl>
  );
}

export default Header;
