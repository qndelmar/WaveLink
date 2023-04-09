import React, { FC, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import Main from "../../pages/Main";
import Register from "../../pages/Register/Register";
import { getAuth } from "firebase/auth";
import { actions as userActions, user } from "../../features/authForms";
import { app } from "../../shared/api/firebase/initializeFirebase";
import { useAppDispatch } from "../store/hooks/hooks";
const AppRoutes: FC = () => {
  const dispatch = useAppDispatch();
  const { setUser } = userActions;
  const { isAuth } = user();
  const auth = getAuth(app);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        dispatch(
          setUser({
            email: currentUser?.email || "",
            token: currentUser?.refreshToken || "",
            uid: currentUser?.uid,
            isAuth: true,
          })
        );
        navigate("/main");
      }
    });
  }, []);
  return isAuth ? (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
