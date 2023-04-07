import React, { FC } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { IValueProps } from "../interfaces/IValueProps";

const LoginControl: FC<IValueProps> = ({ value, setValue, errorMessage }) => {
  return (
    <FormControl>
      <FormLabel>Login</FormLabel>
      <Input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
    </FormControl>
  );
};

export default LoginControl;
