import React, { FC, useState } from "react";
import "./index.scss";
import { Button, FormControl } from "@chakra-ui/react";
import { useValidate } from "../../shared/hooks/useValidate";
import LoginControl from "../../features/loginControl/loginControl";
import PasswordControl from "../../features/passwordControl/passwordControl";
const LoginForm: FC = () => {
  const [login, setLogin, loginErrorMessage] = useValidate("login");
  const [password, setPassword, passErrorMessage] = useValidate("password");
  const [isError, setIsError] = useState<boolean>(false);

  function sendForm() {
    if (passErrorMessage || loginErrorMessage) {
      setIsError(true);
      return;
    }
  }

  return (
    <form className="form" onSubmit={sendForm}>
      <LoginControl
        value={login}
        setValue={setLogin}
        errorMessage={loginErrorMessage}
      />
      <PasswordControl
        value={password}
        setValue={setPassword}
        errorMessage={passErrorMessage}
      />
      <FormControl>
        <Button
          bg="violet"
          _hover={{ background: "darkviolet" }}
          className="submit-btn"
        >
          Login
        </Button>
      </FormControl>
    </form>
  );
};

export default LoginForm;
