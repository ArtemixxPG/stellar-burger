import {useDrag, useDrop} from "react-dnd";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from './burger-constructor-item.module.scss'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {REMOVE_INGREDIENT, SET_INGREDIENTS} from "../../../services/actions/selected-ingedients-actions";
import {sortArray} from "../../../utils/utils";

const BurgerConstructorItem = ({name, image, price, index, id}) => {

    const {selectedIngredients} = useSelector (store => store.selectedIngredients)
    const itemRef = useRef()
    const dispatch = useDispatch()



    const [{ handlerId }, dropItem] = useDrop({
        accept: ["inner"],
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            };
        },
        hover(item, monitor) {
            if (!itemRef.current) {
                return;
            }
            const dragIndex = item.index;

            const hoverIndex = index;


            if (dragIndex === hoverIndex) {
                return;
            }


            const hoverBoundingRect = itemRef.current?.getBoundingClientRect();

            const hoverMidY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = clientOffset.y - hoverBoundingRect.top;


            if (dragIndex < hoverIndex && hoverClientY < hoverMidY) {
                return;
            }


            if (dragIndex > hoverIndex && hoverClientY > hoverMidY) {
                return;
            }

            dispatch({ type:SET_INGREDIENTS, payload:sortArray(dragIndex, hoverIndex, selectedIngredients) });


            item.index = hoverIndex;
        }
    });
    const [{ isDragging }, dragItem] = useDrag({
        type: "inner",
        item: () => {
            return { index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });



    dragItem(dropItem(itemRef));

    return (
        <div ref={itemRef} className={isDragging? styles.item : styles.item_draging}>
            <div className={styles.dragIcon}>
            <DragIcon  type="primary"/>
            </div>
            <ConstructorElement text={name} thumbnail={image} price={price}
            handleClose={()=>dispatch({type: REMOVE_INGREDIENT, payload: id})}/>
        </div>
    );
};

export default BurgerConstructorItem;