import { Button, Input, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledLoginRootContainer = styled.div`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLoginTitle = styled(Text)`
  && {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

export const LoginTextInput = styled(Input)`
  && {
    width: 250px;
    margin-bottom: 40px;
    background-color: white;
`;

export const LoginButton = styled(Button)`
  && {
    background-color: black;
    color: white;
    padding: 0px 10px 0px 10px !important;
  }
`;
