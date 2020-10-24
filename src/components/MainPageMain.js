import styled from "styled-components";

const MainPageMain = styled.main`
  grid-area: main;
  height: 100vh;
  

  .photos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    margin-top: 20px;

  }
  img {
    margin: 5px;
  }
`;

export default MainPageMain;
