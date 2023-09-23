import React from "react";
import {
  StyledSideDrawerDrawerButton,
  StyledSideDrawerDrawerDiv,
  StyledSideDrawerRootContainer,
} from "./StyledSideDrawerComponent";
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
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import authAPI from "../../../Services/API/authAPI";
import useAuthProvider from "../../Provider/AuthProvider";

type Props = {};

const SideDrawer = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const toast = useToast();

  //$$$$$$$$$$$$$ LOGOUT USER API $$$$$$$$$$$$$$$$$
  const logoutUser = authAPI.useLogoutQuery();

  const accessToken = useAuthProvider((state) => state.accessToken);

  const runLoginUser = () => {
    toast.promise(logoutUser.mutateAsync({ accessToken }), {
      success: {
        title: "You are logged out!",
        description: "You have successfully log out from your account.",
      },
      error: { title: "Error!", description: "Please try again." },
      loading: { title: "Loading...", description: "Please wait" },
    });
  };

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  return (
    <StyledSideDrawerRootContainer>
      <StyledSideDrawerDrawerDiv>
        <StyledSideDrawerDrawerButton onClick={onOpen}>
          <ChevronRightIcon color={"grey"} />
        </StyledSideDrawerDrawerButton>
      </StyledSideDrawerDrawerDiv>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Text
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/About");
                onClose();
              }}
            >
              About <ChevronRightIcon />
            </Text>
            <Text
              style={{ cursor: "pointer", marginTop: "10px" }}
              onClick={() => {
                navigate("/Preferences");
                onClose();
              }}
            >
              Preferences <ChevronRightIcon />
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="red" onClick={() => runLoginUser()}>
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </StyledSideDrawerRootContainer>
  );
};

export default SideDrawer;
