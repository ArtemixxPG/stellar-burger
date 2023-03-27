import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getIngredients} from "../services/actions/ingedients-actions";
import {AppThunk, TDispatch} from "../services/reducers/root/root-reducer";

const useFetchList = () => {

    const dispatch = useDispatch<TDispatch>()

    useEffect(() => {

        dispatch(getIngredients())

    }, [dispatch])

};


export default useFetchList;