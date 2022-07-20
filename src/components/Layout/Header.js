import styled from 'styled-components';
import Card from '../Card';
import CardSection from '../CardSection';

const HeaderEl = styled(Card).attrs({
    // as: 'header'
})`
    width: 100%;
`;

const Nav = styled.nav`
    width: 100%;
    display: flex;
`;

const Input = styled.input`
`;

const Header = () => {
    return (
        <HeaderEl>
            <Nav>
                <CardSection title="Date Filter">
                    <div>
                        <input placeholder="Starting date..." type="date" data-testid="start-date" />
                        -
                        <input placeholder="Ending date..." type="date" data-testid="end-date" />
                    </div>
                </CardSection>
                <CardSection title="Filter by ABV">
                    <div>
                        <input placeholder="Insert a value..." data-testid="abv-filter" />
                    </div>
                </CardSection>
            </Nav>
        </HeaderEl>
    )
};

export default Header;
