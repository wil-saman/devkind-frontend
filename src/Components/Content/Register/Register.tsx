import React, { useState } from "react";
import {
  RegisterButton,
  RegisterTextInput,
  StyledRegisterRootContainer,
  StyledRegisterTitle,
} from "./StyledRegisterComponent";
import {
  Button,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const navigate = useNavigate();

  return (
    <StyledRegisterRootContainer>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome to Devkind Showcase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            To access our website, we kindly request that you confirm you are at
            least 18 years old.
            <br />
            <br />
            By clicking "Yes," you are confirming that you meet our age
            requirement and agree to our terms and conditions. If you are not 18
            years old, please click "No" and exit the website.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Yes, I am at least 18 years old.
            </Button>
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <StyledRegisterTitle>Register as a New User</StyledRegisterTitle>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RegisterTextInput
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Insert username here"
        />
        <RegisterTextInput
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Insert email here"
        />
        <InputGroup>
          <RegisterTextInput
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Insert password here"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <RegisterTextInput
            name="password"
            type={showPasswordConfirmation ? "text" : "password"}
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            placeholder="Re-enter password here"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() =>
                setShowPasswordConfirmation(!showPasswordConfirmation)
              }
            >
              {showPasswordConfirmation ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <RegisterButton type="submit" disabled={buttonClicked}>
          Register <ChevronRightIcon />
        </RegisterButton>
      </form>
      <RegisterButton
        style={{ marginTop: "100px" }}
        onClick={() => navigate("/login")}
      >
        Return to Login page <ChevronRightIcon />
      </RegisterButton>
    </StyledRegisterRootContainer>
  );
};

export default Register;
