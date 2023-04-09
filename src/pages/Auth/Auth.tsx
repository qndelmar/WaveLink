import React, { FC } from "react";
import { LoginForm } from "../../features/";
import "./index.scss";

const Auth: FC = () => {
  return (
    <div className="wrapper">
      <LoginForm />
    </div>
  );
};

export default Auth;
