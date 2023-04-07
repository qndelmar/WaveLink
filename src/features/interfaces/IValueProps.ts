import React, { Dispatch } from "react";

export interface IValueProps {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
}
