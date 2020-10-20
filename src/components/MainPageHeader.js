import styled from "styled-components";

const MainPageHeader = styled.header`
  grid-area: head;
  height: 25vh;

  .btn {
    cursor: pointer;
    position: relative;
    padding: 10px 20px;
    background: white;
    font-size: 28px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: all 1s;
    &:after,
    &:before {
      content: " ";
      width: 10px;
      height: 10px;
      position: absolute;
      border: 0px solid #fff;
      transition: all 1s;
    }
    &:after {
      top: -1px;
      left: -1px;
      border-top: 5px solid #ffdcdb;
      border-left: 5px solid #ffdcdb;
    }
    &:before {
      bottom: -1px;
      right: -1px;
      border-bottom: 5px solid #addbc9;
      border-right: 5px solid #addbc9;
    }
    &:hover {
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      // background:rgba(0,0,0,.5);
      // color:white;
      &:before,
      &:after {
        width: 100%;
        height: 100%;
        // border-color:white;
      }
    }
  }

  .data-container {
    display: flex;
    justify-content: center;
  }
`;

export default MainPageHeader;
