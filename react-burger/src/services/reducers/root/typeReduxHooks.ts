import {useDispatch} from "react-redux";
import {AppThunk} from "./root-reducer";


export const useTypeDispatch = () => useDispatch<AppThunk>()