import styled from "styled-components";
import "./App.scss";
import { Comments } from "./components/Comments/Comments";
import { Input } from "./components/Input/Input";
import { Theme } from "./lib/styled/variables";

const App = () => {
    return (
        <StyledApp className="App">
            <Comments />
            <Input />
        </StyledApp>
    );
};

export default App;

const StyledApp = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${Theme.bgColor};
    font-size: 14px;
    line-height: 150%;
    padding: 40px 60px;
    @media (max-width: 900px) {
        padding: 25px 40px;
        font-size: 13px;
    }
    @media (max-width: 600px) {
        padding: 10px;
        font-size: 12px;
    }
`;
