import { SignInWithPopupHook } from "../types";
import { Auth, CustomParameters } from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";
import { useSignInWithPopup } from "./useSignInWithPopup";

export const useSignInWithGoogle = (auth: Auth): SignInWithPopupHook => {
  const createGoogleAuthProvider = (
    scopes?: string[],
    customOAuthParameters?: CustomParameters
  ) => {
    const provider = new GoogleAuthProvider();
    if (scopes) {
      scopes.forEach((scope) => provider.addScope(scope));
    }
    if (customOAuthParameters) {
      provider.setCustomParameters(customOAuthParameters);
    }
    return provider;
  };
  return useSignInWithPopup(auth, createGoogleAuthProvider);
};
