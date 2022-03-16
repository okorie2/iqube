import styled from "styled-components";
import { Colors } from "../../Colors";

export const ModalContainer = styled.div`
  width: 90%;
  box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
  border-radius: 10px;
  color: ${Colors.purple};
  background-color: ${Colors.white};
  margin: auto;
  padding-bottom: 2%;
  hr {
    width: 90%;
    color: ${Colors.lightBlue};
  }
  /* padding: 5%; */
  .title {
    background-color: ${Colors.blueMain};
    border-radius: 10px 10px 0px 0px;
    color: ${Colors.white};
    display: flex;
    justify-content: space-around;
    padding: 2%;
  }
  .flex {
    /* border-radius: 16px 10px 0px 0px; */
    display: flex;
    justify-content: space-around;

    padding: 3%;
    div {
      text-align: right;
    }
  }
  .bar {
    width: 80%;
    margin: auto;
    padding: 2%;

    border-radius: 5px;
    border: 2px solid ${Colors.lightBlue};
  }
`;
