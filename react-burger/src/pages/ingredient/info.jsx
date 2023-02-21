import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ModalContentIngredient from "../../componets/modal-content/modal-content-ingredient/modal-content-ingredient";
import {SET_CURRENT_INGREDIENT} from "../../services/actions/current-ingredient-actions";
import styles from './info.module.scss'

const Info = () => {

    const hasLoading = useSelector(store => store.ingredients.hasLoading)

    const {sauces, mains, buns} = useSelector(store => store.ingredients.types);

    const ingredients = [...sauces, ...mains, ...buns];

    const {id} = useParams()

    const ingredient = ingredients.find(ing => ing._id === id);

    const dispatch = useDispatch();

    useEffect(() => {
        if(!hasLoading) {
            dispatch({type: SET_CURRENT_INGREDIENT, payload: ingredient});
        }

    }, [dispatch, ingredient])

    return (
        <main className={styles.wrapper}>
            <ModalContentIngredient/>
        </main>
    );
};

export default Info;