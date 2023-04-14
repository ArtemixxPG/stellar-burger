import {SyntheticEvent, useCallback, useEffect, useState} from 'react';
import {PROFILE_MENU_ITEMS} from "../../utils/constants";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./user-sidebar.module.scss";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "../../custom-hooks/redux/dipatch/use-dispatch";
import {TThunkAppAction} from "../../services/reducers/root/root-reducer";




const UserSidebar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [activeClass, setActiveClass] = useState<Array<boolean>>([false, false, false])

    const location = useLocation()

    useEffect(()=>{
        if(location.pathname === '/profile'){
            setActiveClass([true, false, false])
        }
        if(location.pathname === '/profile/orders'){
            setActiveClass([false, true, false])
        }
    }, [location])

    const logout = useCallback((e: SyntheticEvent, path: string, onComplete: TThunkAppAction<void>) => {
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
                    ${activeClass[index] ? styles.button_active : styles.button} `}
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