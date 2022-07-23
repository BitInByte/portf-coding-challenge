import styled from 'styled-components';
import Card, { Div } from '../Card';
import CardSection from '../CardSection';
import { useState } from 'react';
import DateRangePicker from '../DateRangePicker';

const HeaderEl = styled(Div).attrs({
    as: 'header'
})`
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
                    <DateRangePicker />
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
