import {useDispatch as dispatchHook} from "react-redux";
import {AppDispatch, TDispatchAll} from "../../../services/reducers/root/root-reducer";

export const useDispatch: TDispatchAll = dispatchHook