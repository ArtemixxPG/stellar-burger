import {useCallback, useState} from "react";
import styles from './profile.module.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {PROFILE_MENU_ITEMS} from "../../utils/constants";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {query, SUCCESS_REFRESH_TOKEN, SUCCESS_REFRESH_USER} from "../../services/actions/user-actions";
import {URL_GET_TOKEN, URL_GET_USER} from "../../utils/URL";
import {getCookie} from "../../utils/cookie";
import useInput from "../../custom-hooks/input/use-input";

const Profile = () => {

    const user = useSelector(store => store.user.user);
    const accessToken = useSelector(store => store.user.accessToken);
    const accessTokenExpiration = useSelector(store => store.user.accessTokenExpiration);

    const {values, handleChange, setValues} = useInput({name: user.name, email: user.email, password: ''});


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [activeMenuButton, setActiveMenuButton] = useState([true, false, false])

    const handleSaveUser = useCallback(e => {
        e.preventDefault()
        dispatch(query(SUCCESS_REFRESH_USER, URL_GET_USER, values, accessToken))
        if (accessTokenExpiration) {
            dispatch(query(SUCCESS_REFRESH_TOKEN, URL_GET_TOKEN, {token: getCookie('token')}))
            dispatch(query(SUCCESS_REFRESH_USER, URL_GET_USER, values, accessToken))
        }
    }, [values, accessToken, accessTokenExpiration, dispatch])

    const handleCanceled = useCallback(e => {
        e.preventDefault()
        setValues({name: user.name, email: user.email, password: ''})
    }, [user])

    const logout = useCallback((e, path, onComplete) => {
        e.preventDefault()
        dispatch(onComplete)
        navigate(path)
    }, [navigate, dispatch])

    const menuItems = PROFILE_MENU_ITEMS.map((item, index) => {
        return (
            <Button htmlType={"button"}
                    key={index}
                    onClick={item.complete ? e => {
                        logout(e, item.path, item.complete.onComplete)
                        activeMenuButton[index] = !activeMenuButton[index]
                        setActiveMenuButton([...activeMenuButton])
                    } : () => {
                        activeMenuButton[index] = !activeMenuButton[index]
                        setActiveMenuButton([...activeMenuButton])
                        navigate(item.path)
                    }
                    }
                    size={'large'}
                    type={'secondary'}
                    extraClass={`text text_type_main-medium text_color_inactive ${activeMenuButton[index] ? styles.button_active : styles.button} `}
            >{item.name}</Button>
        )
    })


    return (
        <main className={`mt-30 ${styles.wrapper}`}>
            <section className={`pl-3 ${styles.content}`}>
                <div className={styles.menu}>
                    {menuItems}
                </div>
                <form className={styles.edit} onSubmit={handleSaveUser}>
                    <Input name="name" placeholder={'Имя'} value={values.name} onChange={handleChange}/>
                    <EmailInput name="email" placeholder={'E-mail'} value={values.email} onChange={handleChange}/>
                    <PasswordInput name="password" placeholder={'Пароль'} value={values.password}
                                   onChange={handleChange}/>
                    {values.email && values.password && values.name ? (<div className={styles.buttons}>
                        <Button type="secondary" size="large" onClick={handleCanceled}>Отмена</Button>
                        <Button type="primary" size="large">Сохранить</Button>
                    </div>) : null}
                </form>

            </section>

        </main>
    );
};

export default Profile;