import { Button, Input, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledRegisterRootContainer = styled.div`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledRegisterTitle = styled(Text)`
  && {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

export const RegisterTextInput = styled(Input)`
  && {
    width: 275px;
    margin-bottom: 40px;
    background-color: white;
`;

export const RegisterButton = styled(Button)`
  && {
    background-color: black;
    color: white;
    padding: 0px 10px 0px 10px !important;
  }
`;
