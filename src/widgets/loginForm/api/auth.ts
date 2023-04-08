import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../shared/api/firebase/initializeFirebase";
const auth = getAuth(app);
type User = {
  email: string;
  password: string;
};
export async function signIn({ email, password }: User) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (e) {
    return e;
  }
}
