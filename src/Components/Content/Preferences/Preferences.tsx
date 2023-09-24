import React, { useState } from "react";
import {
  PreferencesButton,
  PreferencesTextInput,
  StyledPreferencesRootContainer,
  StyledPreferencesTitle,
} from "./StyledPreferencesComponent";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import useAuthProvider from "../../Provider/AuthProvider";

type Props = {};

const Preferences = (props: Props) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [oldpass, setOldpass] = useState<string>("");
  const [showOldpass, setShowoldpass] = useState<boolean>(false);

  const [newpass, setNewpass] = useState<string>("");
  const [showNewpass, setShownewpass] = useState<boolean>(false);

  const [newpassConfirmation, setNewpassconfirmation] = useState<string>("");
  const [showNewpassconfirmation, setShownewpassconfirmation] =
    useState<boolean>(false);

  const user = useAuthProvider((state) => state.user);

  return (
    <StyledPreferencesRootContainer>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <StyledPreferencesTitle>Name : {user?.name}</StyledPreferencesTitle>
        <PreferencesTextInput
          required
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Insert new name here"
        />
        <PreferencesButton type="submit">
          Update Name <ChevronRightIcon />
        </PreferencesButton>
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <StyledPreferencesTitle>Email : {user?.email}</StyledPreferencesTitle>
        <PreferencesTextInput
          required
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Insert new email here"
        />
        <PreferencesButton type="submit">
          Update Email <ChevronRightIcon />
        </PreferencesButton>
      </form>
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
        <StyledPreferencesTitle>Update password</StyledPreferencesTitle>
        <InputGroup>
          <PreferencesTextInput
            required
            name="password"
            type={showOldpass ? "text" : "password"}
            value={oldpass}
            onChange={(event) => setOldpass(event.target.value)}
            placeholder="Enter current password here"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowoldpass(!showOldpass)}
            >
              {showOldpass ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <PreferencesTextInput
            required
            name="newpassword"
            type={showNewpass ? "text" : "password"}
            value={newpass}
            onChange={(event) => setNewpass(event.target.value)}
            placeholder="Enter new password here"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShownewpass(!showNewpass)}
            >
              {showNewpass ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <PreferencesTextInput
            required
            name="newpassconfirmation"
            type={showNewpassconfirmation ? "text" : "password"}
            value={newpassConfirmation}
            onChange={(event) => setNewpassconfirmation(event.target.value)}
            placeholder="Re-enter new password here"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() =>
                setShownewpassconfirmation(!showNewpassconfirmation)
              }
            >
              {showNewpassconfirmation ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <PreferencesButton type="submit">
          Update Password <ChevronRightIcon />
        </PreferencesButton>
      </form>
    </StyledPreferencesRootContainer>
  );
};

export default Preferences;
