import {SyntheticEvent, useCallback} from 'react';
import {PROFILE_MENU_ITEMS} from "../../utils/constants";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./user-sidebar.module.scss";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "../../custom-hooks/redux/dipatch/use-dispatch";



interface IUserSidebar{
    primaryIndex: number
}
const UserSidebar = ({primaryIndex}: IUserSidebar) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = useCallback((e: SyntheticEvent, path: string, onComplete: any) => {
        e.preventDefault()
        dispatch(onComplete)
        navigate(path)
    }, [navigate, dispatch])

    const menuItems = PROFILE_MENU_ITEMS.map((item, index) => {
        return (
            <Button htmlType={"button"}
                    key={index}
                    onClick={item.complete ? (e: SyntheticEvent) => {
                        logout(e, item.path, item.complete.onComplete)
                    } : () => {
                       navigate(item.path)
                    }
                    }
                    size={'large'}
                    type={'secondary'}
                    extraClass={`text text_type_main-medium text_color_inactive 
                    ${index === primaryIndex ? styles.button_active : styles.button} `}
            >{item.name}</Button>
        )
    })

    return (
        <>
            {menuItems}
        </>
    );
};

export default UserSidebar;