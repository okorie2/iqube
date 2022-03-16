import styled from "styled-components";
import { Colors } from "../../Colors";

export const ModalContainer = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 5%;
  background-color: ${Colors.white};
  box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  border-radius: 10px;
  .spot {
    height: 84px;
    width: 84px;
    border-radius: 50%;
    background-color: ${Colors.white};
    box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
    position: relative;
    margin: auto;
    img {
      position: absolute;
      top: 30%;
      left: 25%;
    }
  }
  h1,
  p {
    width: 59%;
    margin: auto;
    text-align: left;
    padding: 3%;
    a {
      color: ${Colors.orange};
      /* text-decoration: none; */
    }
  }
`;
