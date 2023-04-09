import React, { Dispatch, FC } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { AuthError } from "firebase/auth";

type PropsType = {
  error: AuthError | undefined;
  setError: Dispatch<React.SetStateAction<AuthError | undefined>>;
};

const ErrorModal: FC<PropsType> = ({ error, setError }) => {
  return (
    <Modal
      isOpen={Boolean(error)}
      onClose={() => setError(undefined)}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>The error was occurred!</ModalHeader>
        <ModalBody>{error?.message}</ModalBody>
        <ModalFooter>
          <Button onClick={() => setError(undefined)}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ErrorModal;
