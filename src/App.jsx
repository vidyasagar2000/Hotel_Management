import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Royal Palace</Heading>
        <Button>Check In</Button>
        <Button>Check Out</Button>
        <Heading as="h2">The H2</Heading>
        <Input type="number" placeholder="Number of guests"></Input>
        <Heading as="h3">The H3</Heading>
        <Input type="date" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
