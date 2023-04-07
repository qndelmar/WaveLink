import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { validateLogin } from "../helpers/validateLogin";
import { validatePassword } from "../helpers/validatePassword";

export type ReturnedValue = [string, Dispatch<SetStateAction<string>>, string];
export function useValidate(fieldType: string): ReturnedValue {
  const [field, setField] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (fieldType === "login") {
      setErrorMessage(validateLogin(field));
      return;
    }
    if (fieldType === "password") {
      setErrorMessage(validatePassword(field));
      return;
    }
  });
  return [field, setField, errorMessage];
}
