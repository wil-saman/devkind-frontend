import React from "react";
import {
  StyledHomeDrawerButton,
  StyledHomeDrawerDiv,
  StyledHomeRootContainer,
} from "./StyledHomeComponent";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

type Props = {};

const Home = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <StyledHomeRootContainer>
      <StyledHomeDrawerDiv>
        <StyledHomeDrawerButton onClick={onOpen}>
          <ChevronRightIcon color={"grey"} />
        </StyledHomeDrawerButton>
      </StyledHomeDrawerDiv>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Text
              style={{ cursor: "pointer" }}
              onClick={() => {
                onClose();
              }}
            >
              About <ChevronRightIcon />
            </Text>
            <Text
              style={{ cursor: "pointer", marginTop: "10px" }}
              onClick={() => {
                onClose();
              }}
            >
              Preferences <ChevronRightIcon />
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="red">Logout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      This is Home
    </StyledHomeRootContainer>
  );
};

export default Home;
