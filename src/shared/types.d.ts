import {
  ActionCodeSettings,
  AuthError,
  CustomParameters,
  UserCredential,
} from "firebase/auth";
import React, { Dispatch } from "react";

declare type AuthActionHook<M> = [
  M,
  boolean,
  AuthError | undefined,
  Dispatch<React.SetStateAction<AuthError | undefined>>
];
declare type CreateUserOptions = {
  emailVerificationOptions?: ActionCodeSettings;
  sendEmailVerification?: boolean;
};
declare type EmailAndPasswordActionHook = AuthActionHook<
  (email: string, password: string) => Promise<UserCredential | undefined>
>;

declare type SignInWithEmailLinkHook = AuthActionHook<
  (email: string, emailLink?: string) => Promise<UserCredential | undefined>
>;

declare type SignInWithPopupHook = AuthActionHook<
  (
    scopes?: string[],
    customOAuthParameters?: CustomParameters
  ) => Promise<UserCredential | undefined>
>;
declare type UserFromFirestore = {
  email: string,
  displayName: string
}
