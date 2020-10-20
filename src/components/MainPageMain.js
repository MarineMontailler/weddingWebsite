import styled from "styled-components";

const MainPageMain = styled.main`
  grid-area: main;
  height: 100vh;

  .photos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 10px;
    margin-top: 20px;
    margin-right: 10px;
  }
  img {
    margin: 5px;
  }
`;

export default MainPageMain;
