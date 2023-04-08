import { IStateUser } from "../interfaces/IStateUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IStateUser = {
  email: "",
  token: "",
  id: null,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IStateUser>) {
      state = action.payload;
    },
    removeUser(state) {
      state.email = "";
      state.token = "";
      state.id = null;
    },
  },
});

export const actions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
