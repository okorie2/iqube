import styled from "styled-components";
import { Colors } from "../../Colors";
export const AuthInput = styled.input`
  padding: 2%;
  outline: none;
  border: none;
  background-color: none;
  border-radius: 10px;

  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-self: center;
  border-radius: 10px;
  background-color: #fff;
  border: ${(props) =>
    props.border ? props.border : `1px solid ${Colors.purple}`};
  padding-bottom: 2.6%;
  height: 64px;
  position: relative;
  width: 94%;
`;

export const InputIcon = styled.div`
  position: absolute;
  right: 3%;
  top: 19%;
  cursor: pointer;
`;

export const AuthInputContainer = styled.div`
  margin-left: 4%;
  margin-bottom: 2%;

  //   background-color: yellow;
  label {
    font-size: smaller;
    text-transform: capitalize;
    color: ${Colors.black};
    font-weight: bold;
  }
  p {
    font-size: 16px;
    color: ${Colors.lightBlue};
  }
`;
export const Error = styled.div`
  color: red;
  font-size: small;
  margin-left: 4%;
`;

export const SelectInput = styled.select`
  border-radius: 10px;
  background-color: #fff;
  border: ${(props) =>
    props.border ? props.border : `1px solid ${Colors.purple}`};
  height: 75%;
  display: flex;
  align-self: center;
  width: 90%;
`;
