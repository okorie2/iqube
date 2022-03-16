import styled from "styled-components";
import { Colors } from "../../Colors";

export const BillingContainer = styled.div`
  width: 90%;
  margin: auto;
  #select {
    height: 40px;
    display: flex;
    margin: auto;
    width: 710px;
    background-color: #fff;
    border-radius: 10px;
    border: ${(props) =>
      props.border ? props.border : `1px solid ${Colors.purple}`};
  }
`;

export const BtnFlex = styled.div`
  margin-top: 4.5%;
  display: flex;
  width: 80%;
  align-items: center;

  justify-content: space-around;
`;

export const SlctGrid = styled.div`
  width: 97%;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 25% 20%;
`;
