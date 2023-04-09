import {
  Auth,
  AuthError,
  AuthProvider,
  CustomParameters,
  signInWithPopup,
} from "firebase/auth";
import { SignInWithPopupHook } from "../types";
import { useCallback, useState } from "react";

export const useSignInWithPopup = (
  auth: Auth,
  createProvider: (
    scopes?: string[],
    customOAuthParameters?: CustomParameters
  ) => AuthProvider
): SignInWithPopupHook => {
  const [error, setError] = useState<AuthError>();
  const [loading, setLoading] = useState<boolean>(false);
  const doSignInWithPopup = useCallback(
    async (scopes?: string[], customOAuthParameters?: CustomParameters) => {
      setLoading(true);
      setError(undefined);
      try {
        const provider = createProvider(scopes, customOAuthParameters);
        return await signInWithPopup(auth, provider);
      } catch (err) {
        setError(err as AuthError);
      } finally {
        setLoading(false);
      }
    },
    [auth, createProvider]
  );

  return [doSignInWithPopup, loading, error, setError];
};
