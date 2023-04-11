import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStateUser {
  email: string;
  token: string;
  uid: string | undefined;
  isAuth: boolean;
  photoUri: string,
  defaultName: string
}

const initialState: IStateUser = {
  email: "",
  token: "",
  uid: undefined,
  isAuth: false,
  photoUri: "",
  defaultName: ""
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IStateUser>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.uid = action.payload.uid;
      state.photoUri = action.payload.photoUri;
      state.defaultName = action.payload.defaultName;
      state.isAuth = true;
    },
    removeUser(state) {
      state.email = "";
      state.token = "";
      state.uid = undefined;
      state.isAuth = false;
    },
  },
});

export const actions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
