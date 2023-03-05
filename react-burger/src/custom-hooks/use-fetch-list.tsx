import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {getIngredients} from "../services/actions/ingedients-actions";

const useFetchList = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        //@ts-ignore
        dispatch(getIngredients())

    }, [])


};


export default useFetchList;