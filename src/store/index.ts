import {Action, combineReducers} from "redux";
import {configureStore, ThunkAction} from "@reduxjs/toolkit";


const rootReducer = combineReducers({

})

export const setupStore = () => configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
export type AppThunk = ThunkAction<void, RootState, unknown, Action>