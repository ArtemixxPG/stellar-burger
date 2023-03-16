import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getIngredients} from "../services/actions/ingedients-actions";

const useFetchList = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        //@ts-ignore here
        dispatch(getIngredients())

    }, [dispatch])

};


export default useFetchList;