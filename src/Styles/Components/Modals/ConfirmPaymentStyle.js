import styled from "styled-components";
import { Colors } from "../../Colors";

export const ModalContainer = styled.div`
  width: 90%;
  box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
  border-radius: 10px;
  color: ${Colors.purple};
  background-color: ${Colors.white};
  margin: auto;
  margin-top: 4%;
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
    justify-content: space-between;

    padding: 2%;
    div {
      margin: 0 5%;
    }
  }
  .flex {
    /* border-radius: 16px 10px 0px 0px; */
    display: flex;
    justify-content: space-between;
    padding: 3%;
    margin-bottom: 1%;
    div {
      margin: 0 5%;
    }
  }
  .bar {
    width: 85%;
    margin: auto;
    margin-top: 3%;
    margin-bottom: 3%;

    padding: 2%;

    border-radius: 5px;
    border: 2px solid ${Colors.lightBlue};
    div {
      margin: 0 0%;
    }
  }
`;
