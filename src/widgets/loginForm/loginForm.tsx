import React, { FC, useState } from "react";
import "./index.scss";
import {
  Button,
  FormControl,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useValidate } from "../../shared/hooks/useValidate";
import LoginControl from "../../features/loginControl";
import PasswordControl from "../../features/passwordControl";
import { signIn } from "./api/auth";
const LoginForm: FC = () => {
  const [login, setLogin, loginErrorMessage] = useValidate("login");
  const [password, setPassword, passErrorMessage] = useValidate("password");
  const [isError, setIsError] = useState<boolean>(false);
  const [dataError, setDataError] = useState<string>("");

  async function sendForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (passErrorMessage || loginErrorMessage) {
      setIsError(true);
      return;
    }
    const result = await signIn({
      email: login,
      password,
    });
    if (result instanceof Error) {
      if (result.message === "Firebase: Error (auth/user-not-found).") {
        setDataError("Oops! User with this email is not exists!");
      }
    }
  }
  function hideError() {
    setIsError(false);
  }

  return (
    <form className="form" onClick={hideError}>
      <LoginControl
        value={login}
        setValue={setLogin}
        errorMessage={loginErrorMessage}
        isError={isError}
      />
      <PasswordControl
        value={password}
        setValue={setPassword}
        errorMessage={passErrorMessage}
        isError={isError}
      />
      <FormControl>
        <Button
          bg="violet"
          _hover={{ background: "darkviolet" }}
          className="submit-btn"
          onClick={sendForm}
        >
          Login
        </Button>
      </FormControl>
      <Modal
        isOpen={Boolean(dataError)}
        onClose={() => setDataError("")}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>The error was occurred!</ModalHeader>
          <ModalBody>{dataError}</ModalBody>
          <ModalFooter>
            <Button onClick={() => setDataError("")}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
};

export default LoginForm;
