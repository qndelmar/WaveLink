import { useSelector } from "react-redux";
import { RootState } from "../../app/store/types";

export const user = () => useSelector((state: RootState) => state.loginReducer);
