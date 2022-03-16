import styled from "styled-components";
import { Colors } from "../Colors";

export const HomeStyle = {
  MainContainer: styled.div`
    background: rgb(255, 239, 224);
    background: linear-gradient(
      175deg,
      rgba(255, 239, 224, 1) 0%,
      rgba(255, 239, 224, 1) 42%,
      rgba(255, 255, 255, 1) 42%
    );
    width: 100%;
    padding: 5% 0;
    h1 {
      color: ${Colors.purple};
      width: 54%;
      margin: auto;
      padding: 1%;
    }
  `,
  SlideContainer: styled.div`
    width: 54%;
    margin: auto;
    padding: 1%;

    .title {
      display: flex;
      justify-content: space-between;

      div:nth-child(1) {
        color: ${(props) => (props.shade ? props.shade : Colors.grey)};
        cursor: pointer;
      }
      div:nth-child(2) {
        color: ${(props) => (props.shade ? props.shade : Colors.grey)};

        cursor: pointer;
      }
      div:nth-child(3) {
        color: ${(props) => (props.shade ? props.shade : Colors.grey)};

        cursor: pointer;
      }
    }
    .slider {
      margin-top: 1%;
      border: 0.1px inset ${Colors.black};
      background-color: ${Colors.black};
      position: relative;
      height: 1px;
    }
  `,
  Higlight: styled.div`
    width: 15%;
    height: 13px;

    //   border: 2px inset ${Colors.orange};
    border-radius: 10px;
    background-color: ${Colors.orange};
    position: absolute;
    bottom: -500%;
    left: ${(props) => (props.left ? props.left : "-1%")};
  `,
  Form: styled.div`
    width: 60%;
    margin: auto;
  `,
};
