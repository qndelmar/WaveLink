import React, { FC } from "react";
import { Button } from "@chakra-ui/react";
import { useSignInWithGoogle } from "../../shared";
import { getAuth } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {app} from "../../shared/api/firebase/initializeFirebase";

const GoogleLoginBtn: FC = () => {
  const auth = getAuth(app);
  const [signInWithPopup, load] = useSignInWithGoogle(auth);
  async function signIn() {
    await signInWithPopup();
  }
  return (
    <Button onClick={signIn} isLoading={load} display="flex" w="3em" h="3em">
      <FontAwesomeIcon
        icon={faGoogle}
        style={{ color: "#4171c3", fontSize: "2em" }}
      />
    </Button>
  );
};

export default GoogleLoginBtn;
