import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import Main from "../../pages/Main";

const AppRoutes: FC = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
