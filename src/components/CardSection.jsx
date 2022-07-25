import styled from 'styled-components';

const Div = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    text-align: center;
    /* padding: 2rem; */
`;

const CardSection = ({ title, children }) => {
    return (
        <Div data-testid="card-section">
            <h3>{title}</h3>
            {children}
        </Div>
    )
};

export default CardSection;
