import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {getIngredients} from "../services/actions/ingedients-actions";

const useFetchList = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getIngredients())

    }, [])


};


export default useFetchList;