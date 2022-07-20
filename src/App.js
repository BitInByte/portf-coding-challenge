// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';
import Layout from './pages/Layout';

const Wrapper = styled.div`
    width: 80rem;
    margin: auto;
    background_color: red;
`;


const App = () => {
    return (
        <Wrapper>
            <Layout />
        </Wrapper>
    );
}

export default App;
