import {useDispatch as dispatchHook} from "react-redux";
import {TDispatchAll} from "../../../services/reducers/root/root-reducer";

export const useDispatch: TDispatchAll = dispatchHook