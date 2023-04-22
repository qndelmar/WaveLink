import {
  Auth,
  AuthError,
  AuthProvider,
  CustomParameters,
  signInWithPopup,
} from "firebase/auth";
import { SignInWithPopupHook } from "../types";
import { useCallback, useState } from "react";
import {doc, getFirestore, setDoc} from "firebase/firestore";


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
        const user = await signInWithPopup(auth, provider);
        await setDoc(doc(getFirestore(), "friends", user.user.uid), {}, {merge: true})
        return user;
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
