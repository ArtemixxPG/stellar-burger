import {useEffect} from "react";
import {getIngredients} from "../services/actions/ingedients-actions";
import {useDispatch} from "./redux/dipatch/use-dispatch";

const useFetchList = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getIngredients())

    }, [dispatch])

};


export default useFetchList;