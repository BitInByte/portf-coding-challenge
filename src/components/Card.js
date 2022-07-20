import styled from 'styled-components';

const Div = styled.header`
    witdth: 100%;
    margin: 2rem;
    padding: 2rem;
    border-radius: ${props => props.theme.borders.radius.card};
    box-shadow: ${props => props.theme.shadows.card};
    border: ${props => props.theme.borders.card};
`;

const Card = ({ className, children }) => (
    <Div className={className} data-testid="card">
        {children}
    </Div>
);

export default Card;
