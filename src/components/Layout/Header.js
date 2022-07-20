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
                    <p>Date Filter Here</p>
                </CardSection>
                <CardSection title="Filter by ABV">
                    <p>Date Filter Here</p>
                </CardSection>
            </Nav>
        </HeaderEl>
    )
}

export default Header;
