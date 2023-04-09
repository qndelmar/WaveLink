import React, { FC } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { IValueProps } from "../interfaces/IValueProps";

const LoginControl: FC<IValueProps> = ({
  value,
  setValue,
  errorMessage,
  isError,
}) => {
  return (
    <FormControl isInvalid={isError && Boolean(errorMessage)}>
      <FormLabel>Login</FormLabel>
      <Input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
      {!isError && (
        <FormHelperText>Only english, more than 8 symbols</FormHelperText>
      )}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default LoginControl;
