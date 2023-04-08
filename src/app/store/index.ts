import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../../widgets/loginForm/model";

export const rootReducer = combineReducers({
  loginReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
