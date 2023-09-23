import { Button } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledHomeRootContainer = styled.div`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

export const StyledHomeDrawerDiv = styled.div`
  && {
    height: 100%;
    width: 50px;
    display: flex;
    padding: 5px;
  }
`;

export const StyledHomeDrawerButton = styled(Button)`
  && {
    height: 40px;
    width: 40px;
    display: flex;
    border-radius: 5px;
    border: 1px dashed grey;
  }
`;
