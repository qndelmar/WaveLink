import { ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { rootReducer, setupStore } from "./index";

declare type RootState = ReturnType<typeof rootReducer>;
declare type AppStore = ReturnType<typeof setupStore>;
declare type AppDispatch = AppStore["dispatch"];
declare type AppThunk = ThunkAction<void, RootState, unknown, Action>;
