import {useDrag, useDrop} from "react-dnd";
import {useRef} from "react";
import { Identifier, XYCoord } from 'dnd-core'
import styles from './burger-constructor-item.module.scss'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {sortArray} from "../../../utils/utils";
import {useDispatch} from "../../../custom-hooks/redux/dipatch/use-dispatch";
import {removeIngredient, setIngredients} from "../../../services/reducers/selected-ingredients-reducers";
import {useSelector} from "../../../custom-hooks/redux/selectors/use-selectors";

interface IBurgerConstructorItem {
    name: string
    image: string
    price: number
    index: number
    id: string
}

const BurgerConstructorItem = ({name, image, price, index, id}: IBurgerConstructorItem) => {

    const {selectedIngredientsSelector} = useSelector()

    const selectedIngredients = selectedIngredientsSelector.selectedIngredients
    const itemRef = useRef<HTMLLIElement>(null)
    const dispatch = useDispatch()


    const [{handlerId}, dropItem] = useDrop<IBurgerConstructorItem, void, {handlerId: Identifier | null}>({
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

            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;


            if (dragIndex < hoverIndex && hoverClientY < hoverMidY) {
                return;
            }


            if (dragIndex > hoverIndex && hoverClientY > hoverMidY) {
                return;
            }

            dispatch(setIngredients(sortArray(dragIndex, hoverIndex, selectedIngredients)))


            item.index = hoverIndex;
        }
    });
    const [{isDragging}, dragItem] = useDrag({
        type: "inner",
        item: () => {
            return {index};
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });


    dragItem(dropItem(itemRef));

    return (
        <li ref={itemRef} className={isDragging ? styles.item : styles.item_draging}>
            <div className={styles.dragIcon}>
                <DragIcon type="primary"/>
            </div>
            <ConstructorElement text={name} thumbnail={image} price={price}
                                handleClose={() => dispatch(removeIngredient(id))}/>
        </li>
    );
};



export default BurgerConstructorItem;