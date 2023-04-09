import React, { FC, useState } from "react";
import LoginControl from "../../entities/ui/loginControl";
import PasswordControl from "../../entities/ui/passwordControl";
import { Button, FormControl } from "@chakra-ui/react";
import ErrorModal from "../../entities/ui/errorModal";
import { getAuth } from "firebase/auth";
import { app } from "../../shared/api/firebase/initializeFirebase";
import { useValidate } from "../../shared/hooks/useValidate";
import { useSignUp } from "../../shared";

const RegisterForm: FC = () => {
  const auth = getAuth(app);
  const [login, setLogin, loginErrorMessage] = useValidate("login");
  const [password, setPassword, passErrorMessage] = useValidate("password");
  const [validationError, setValidationError] = useState<boolean>(false);
  const [signUpWithEmail, loading, error, setError] = useSignUp(auth, {
    sendEmailVerification: true,
  });
  async function signUp(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (loginErrorMessage || passErrorMessage) {
      setValidationError(true);
      return;
    }
    await signUpWithEmail(login, password);
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
          onClick={signUp}
          isLoading={loading}
        >
          Register
        </Button>
      </FormControl>
      <ErrorModal error={error} setError={setError} />
    </form>
  );
};

export default RegisterForm;
