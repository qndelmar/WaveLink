import React, { FC } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { IValueProps } from "./interfaces/IValueProps";

const PasswordControl: FC<IValueProps> = ({
  value,
  setValue,
  errorMessage,
  isError,
}) => {
  return (
    <div>
      <FormControl isInvalid={isError && Boolean(errorMessage)}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></Input>
        {!isError && (
          <FormHelperText>More than 8 and less than 30 symbols</FormHelperText>
        )}
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </div>
  );
};

export default PasswordControl;
