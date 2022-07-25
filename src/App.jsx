import styled from 'styled-components';
import Layout from './pages/Layout';

const Wrapper = styled.div`
  max-width: 80rem;
  margin: auto;
  background_color: red;
`;

function App() {
  return (
    <Wrapper>
      <Layout />
    </Wrapper>
  );
}

export default App;
