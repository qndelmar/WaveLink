import React, { FC, useState } from "react";
import "./index.scss";
import { Button, FormControl } from "@chakra-ui/react";
import { useValidate } from "../../../shared/hooks/useValidate";
import LoginControl from "../../ui/loginControl";
import PasswordControl from "../../ui/passwordControl";
import ErrorModal from "../../../entities/ui/AuthErrorModal/errorModal";
import { getAuth } from "firebase/auth";
import { app } from "../../../shared/api/firebase/initializeFirebase";
import { useSignInWithEmail } from "../../../shared";
import { Link } from "react-router-dom";

const LoginForm: FC = () => {
  const auth = getAuth(app);
  const [login, setLogin, loginErrorMessage] = useValidate("login");
  const [password, setPassword, passErrorMessage] = useValidate("password");
  const [validationError, setValidationError] = useState<boolean>(false);
  const [signInWithEmailAndPassword, loading, error, setError] =
    useSignInWithEmail(auth);

  async function signIn(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (loginErrorMessage || passErrorMessage) {
      setValidationError(true);
      return;
    }
    await signInWithEmailAndPassword(login, password);
  }

  return (
    <form className="form">
      <LoginControl
        value={login}
        setValue={setLogin}
        errorMessage={loginErrorMessage}
        isError={validationError}
      />
      <PasswordControl
        value={password}
        setValue={setPassword}
        errorMessage={passErrorMessage}
        isError={validationError}
      />
      <FormControl>
        <Button
          bg="violet"
          _hover={{ background: "darkviolet" }}
          className="submit-btn"
          onClick={signIn}
          isLoading={loading}
        >
          Login
        </Button>
      </FormControl>
      <ErrorModal error={error} setError={setError} />
      <Link to="/register">Don&apos;t have an account?</Link>
    </form>
  );
};

export default LoginForm;
