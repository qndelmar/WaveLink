import React, { FC } from "react";
import { RegisterForm } from "../../features";
import "./index.scss";

const Register: FC = () => {
  return (
    <div className="wrapper">
      <RegisterForm />
    </div>
  );
};

export default Register;
