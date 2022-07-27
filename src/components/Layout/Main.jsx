import styled from 'styled-components';
import { ResponsiveBar } from '@nivo/bar';
import Beer from '../../models/Beer';
import CardSection from '../CardSection';
import Card from '../Card';

const CardSectionEl = styled(CardSection)`
  div {
    height: 30rem !important;
  }
`;

function Main() {
  const dummyData = [
    new Beer(0, 'Brewdog', 30, '04/2007'),
    new Beer(1, 'Stella', 30, '04/2007'),
    new Beer(2, 'Budweiser', 30, '04/2007'),
    new Beer(3, 'Brewdog', 30, '05/2007'),
    new Beer(4, 'Stella', 30, '05/2007'),
    new Beer(5, 'Brewdog', 30, '06/2007'),
    new Beer(6, 'Stella', 30, '06/2007'),
    new Beer(7, 'Corona', 30, '06/2007'),
    new Beer(8, 'Budweiser', 30, '07/2007'),
    new Beer(9, 'Stella', 30, '08/2007'),
    new Beer(10, 'Corona', 30, '09/2007'),
    new Beer(11, 'Brewdog', 30, '09/2007'),
    new Beer(12, 'Stella', 30, '10/2007'),
    new Beer(13, 'Corona', 30, '10/2007'),
  ];

  return (
    <Card>
      <CardSectionEl title="Graph Result">
        <ResponsiveBar data={dummyData} keys={['id']} indexBy="firstBrewed" />
      </CardSectionEl>
    </Card>
  );
}

export default Main;
