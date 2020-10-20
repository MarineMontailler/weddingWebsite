import styled from "styled-components";

const MainPageLayout = styled.div`
  height: 100vh;
  text-align: center;
  display: grid;
  grid-template-areas:
    "head head head"
    "nav nav nav"
    "main main main";
  font-family: "Montserrat", sans-serif;
`;

export default MainPageLayout;
