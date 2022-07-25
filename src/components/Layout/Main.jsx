import styled from 'styled-components';
import Beer from '../../models/Beer';
import { ResponsiveBar } from '@nivo/bar';
import CardSection from '../CardSection';
import Card from '../Card';

const CardSectionEl = styled(CardSection)`
  div {
    height: 30rem !important;
  }
`;

function Main() {
  const dummyData = [
    { id: 0, name: 'Brewdog', quantity: 100 },
    { id: 1, name: 'Stella', quantity: 400 },
    { id: 2, name: 'Corona', quantity: 367 },
  ];

  return (
    <Card>
      <CardSectionEl title="Graph Result">
        <ResponsiveBar data={dummyData} keys={['quantity']} />
      </CardSectionEl>
    </Card>
  );
}

export default Main;
