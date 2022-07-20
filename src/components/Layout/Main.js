import styled from 'styled-components';
import Card from '../Card';
import CardSection from '../CardSection';

const MainEl = styled.main`
    width: 100%;
`;

const Main = () => {
    return (
        <MainEl>
            <Card>
                <CardSection title="Graph Result">

                </CardSection>
            </Card>

        </MainEl>
    )
};

export default Main;
