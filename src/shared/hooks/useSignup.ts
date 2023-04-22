import {
  Auth,
  AuthError,
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useCallback, useState } from "react";
import { CreateUserOptions, EmailAndPasswordActionHook } from "../types";
import {doc, setDoc, getFirestore} from 'firebase/firestore';

export default (
  auth: Auth,
  options?: CreateUserOptions
): EmailAndPasswordActionHook => {
  const [error, setError] = useState<AuthError>();
  const [loading, setLoading] = useState<boolean>(false);
  const createUserWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(undefined);
      try {
        const user = await firebaseCreateUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (options && options.sendEmailVerification && user.user) {
          await sendEmailVerification(
            user.user,
            options.emailVerificationOptions
          );
        }
        if(user.user){
            await setDoc(doc(getFirestore(), "friends", user.user.uid), {}, {merge: true})
        }
        return user;
      } catch (error) {
        setError(error as AuthError);
      } finally {
        setLoading(false);
      }
    },
    [auth, options]
  );

  return [createUserWithEmailAndPassword, loading, error, setError];
};
