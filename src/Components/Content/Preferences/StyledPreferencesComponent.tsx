import { Button, Input, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledPreferencesRootContainer = styled.div`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledPreferencesTitle = styled(Text)`
  && {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const PreferencesTextInput = styled(Input)`
  && {
    width: 300px;
    margin-bottom: 20px;
    background-color: white;
`;

export const PreferencesButton = styled(Button)`
  && {
    background-color: black;
    color: white;
    padding: 0px 10px 0px 10px !important;
  }
`;
