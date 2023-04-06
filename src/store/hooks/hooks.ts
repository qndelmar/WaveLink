import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../index";

export const useAppDispatch = () => {
    return useDispatch<AppDispatch>();
}
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;