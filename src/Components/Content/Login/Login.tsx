import React, { useState } from "react";
import {
  LoginButton,
  LoginTextInput,
  StyledLoginRootContainer,
  StyledLoginTitle,
} from "./StyledLoginComponent";
import {
  Button,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import authAPI from "../../../Services/API/authAPI";
import useAuthProvider from "../../Provider/AuthProvider";

interface ILoginProps {
  email: string;
  password: string;
}

type Props = {};

const Login = (props: Props) => {
  const [loginForm, setLoginForm] = useState<ILoginProps>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClick = () => setShowPassword(!showPassword);
  const handleUserFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((users) => ({ ...users, [e.target.name]: e.target.value }));
  };

  const accessToken = useAuthProvider((state) => state.accessToken);

  const toast = useToast();

  //$$$$$$$$$$$$$ LOGIN  USER API $$$$$$$$$$$$$$$$$
  const loginUser = authAPI.useLoginQuery();

  const runLoginUser = () => {
    const existingUser = {
      accessToken: accessToken,
      queryProps: {
        email: loginForm.email,
        password: loginForm.password,
      },
    };
    console.log("login is running", existingUser);

    toast.promise(loginUser.mutateAsync(existingUser), {
      success: {
        title: "You are logged in!",
        description: "You have successfully login your account.",
      },
      error: { title: "Error!", description: "Please try again." },
      loading: { title: "Loading...", description: "Please wait" },
    });
  };

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  return (
    <StyledLoginRootContainer>
      <StyledLoginTitle>Devkind Showcase</StyledLoginTitle>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          runLoginUser();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginTextInput
          required
          name="email"
          value={loginForm.email}
          onChange={handleUserFormChange}
          placeholder="Insert email here"
        />
        <InputGroup>
          <LoginTextInput
            name="password"
            type={showPassword ? "text" : "password"}
            value={loginForm.password}
            onChange={handleUserFormChange}
            placeholder="Insert password here"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <LoginButton type="submit" disabled={buttonClicked}>
          Login <ChevronRightIcon />
        </LoginButton>
      </form>
      <LoginButton
        style={{ marginTop: "100px" }}
        onClick={() => navigate("/register")}
      >
        New User? Register Here!
      </LoginButton>
    </StyledLoginRootContainer>
  );
};

export default Login;
