import styled from 'styled-components';

export const Div = styled.div`
  witdth: 100%;
  margin: 2rem;
  padding: 2rem;
  border-radius: ${(props) => props.theme.borders.radius.card};
  box-shadow: ${(props) => props.theme.shadows.card};
  border: ${(props) => props.theme.borders.card};
`;

function Card({ className, children }) {
  return (
    <Div className={className} data-testid="card">
      {children}
    </Div>
  );
}

export default Card;
