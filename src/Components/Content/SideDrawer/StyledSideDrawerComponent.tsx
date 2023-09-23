import { Button } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledSideDrawerRootContainer = styled.div`
  && {
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
    flex-direction: row;
  }
`;

export const StyledSideDrawerDrawerDiv = styled.div`
  && {
    height: 100%;
    width: 50px;
    display: flex;
    padding: 5px;
  }
`;

export const StyledSideDrawerDrawerButton = styled(Button)`
  && {
    height: 40px;
    width: 40px;
    display: flex;
    border-radius: 5px;
    border: 1px dashed grey;
  }
`;
