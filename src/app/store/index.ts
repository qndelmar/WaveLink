import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../../features";

export const rootReducer = combineReducers({
  loginReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
