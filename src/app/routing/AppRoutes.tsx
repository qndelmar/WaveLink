import React, {FC, useEffect, useState} from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import Register from "../../pages/Register/Register";
import { getAuth } from "firebase/auth";
import { actions as userActions, user } from "../../features";
import { app } from "../../shared/api/firebase/initializeFirebase";
import { useAppDispatch } from "../store/hooks/hooks";
import HomepageLayout from "../../pages/HomepageLayout";
import ChatPage from "../../pages/ChatPage";
import HomePage from "../../pages/HomePage";
import Settings from "../../pages/Settings/Settings";
import FindFriends from "../../pages/FindFriends";
import AllFriendsList from "../../pages/AllFriendsList";
import Preloader from "../../shared/ui/Preloader";
const AppRoutes: FC = () => {
  const dispatch = useAppDispatch();
  const { setUser } = userActions;
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
            photoUri: currentUser?.photoURL || '',
            defaultName: currentUser?.displayName || ''
          })
        );
        navigate("/");
      }
      setIsLoading(false);
    });
  }, []);
  return !isLoading ? (isAuth ? (
    <Routes>
        <Route element={<HomepageLayout/>}>
            <Route  path="home" element={<HomePage/>}/>
            <Route path="chat" element={<ChatPage/>} />
            <Route path="settings" element={<Settings/>}/>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route  path="friends" element={<FindFriends/>}>
                <Route index element={<Navigate to="all"/>}/>
                <Route path=":kind" element={<AllFriendsList/>}/>
            </Route>
        </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )) : <Preloader isLoading={isLoading}/>;
};

export default AppRoutes;
