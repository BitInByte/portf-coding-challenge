import styled from 'styled-components';
import { Div } from '../Card';
import CardSection from '../CardSection';

const MainEl = styled(Div).attrs({
  as: 'main',
})``;

function Main() {
  return (
    <MainEl>
      <CardSection title="Graph Result"></CardSection>
    </MainEl>
  );
}

export default Main;
