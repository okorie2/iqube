import styled from "styled-components";
import { Colors } from "../../Colors";

export const MainButton = styled.button`
  background: ${Colors.grad};
  height: 50px;
  border-radius: 10px;
  border: none;
  width: 28.5%;
  color: ${Colors.white};
  a {
    text-decoration: none;
    color: ${Colors.white};
  }
`;

export const LightButton = styled.div`
  background: none;
  padding: 3% 2%;
  border-radius: 10px;
  border: none;
  width: 40%;
  color: ${Colors.purple};
`;
