import type { AppDispatch, RootState } from "./store";
import { useDispatch, type TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";


const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export { useAppDispatch, useAppSelector };