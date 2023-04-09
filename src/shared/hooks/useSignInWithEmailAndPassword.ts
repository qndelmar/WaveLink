import {
  Auth,
  AuthError,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
} from "firebase/auth";
import { useCallback, useState } from "react";
import { EmailAndPasswordActionHook } from "../types";

export default (auth: Auth): EmailAndPasswordActionHook => {
  const [error, setError] = useState<AuthError>();
  const [loading, setLoading] = useState<boolean>(false);

  const signInWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(undefined);
      try {
        return await firebaseSignInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setError(err as AuthError);
      } finally {
        setLoading(false);
      }
    },
    [auth]
  );

  return [signInWithEmailAndPassword, loading, error, setError];
};
