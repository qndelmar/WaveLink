import React, { FC } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { IValueProps } from "../interfaces/IValueProps";

const PasswordControl: FC<IValueProps> = ({
  value,
  setValue,
  errorMessage,
}) => {
  return (
    <div>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></Input>
      </FormControl>
    </div>
  );
};

export default PasswordControl;
