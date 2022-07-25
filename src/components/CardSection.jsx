import styled from 'styled-components';

export const CardSectionEl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  text-align: center;
  /* padding: 2rem; */
`;

const CardSection = ({ title, children, className }) => {
  return (
    <CardSectionEl data-testid="card-section" className={className}>
      <h3>{title}</h3>
      {children}
    </CardSectionEl>
  );
};

export default CardSection;
