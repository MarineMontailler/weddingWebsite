import styled from "styled-components";

const MainPageNavbar = styled.nav`
  grid-area: nav;
  height: 18vh;
  background-color: white;
  border: dashed 5px hsla(0, 100%, 90%, 1);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  margin-left: 10px;
  margin-right: 10px;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
  }
  li {
    margin: 10px;
  }
  a {
    color: grey;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    color: black;
  }
`;

export default MainPageNavbar;
