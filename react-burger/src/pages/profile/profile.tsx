import {ChangeEvent, SyntheticEvent, useCallback, useState} from "react";
import styles from './profile.module.scss'
import {useNavigate} from "react-router-dom";
import {PROFILE_MENU_ITEMS} from "../../utils/constants";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {query, SUCCESS_REFRESH_TOKEN, SUCCESS_REFRESH_USER} from "../../services/actions/user-actions";
import {URL_GET_TOKEN, URL_GET_USER} from "../../utils/URL";
import {getCookie} from "../../utils/cookie";
import useInput from "../../custom-hooks/input/use-input";
import {TStore} from "../../services/reducers/root/root-reducer";

const Profile = () => {

    const user = useSelector((store:TStore) => store.user.user);
    const isLogin = useSelector((store:TStore) => store.user.isLogIn);

    const {values, handleChange, setValues} = useInput({name: user.name, email: user.email, password: ''});


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [activeMenuButton, setActiveMenuButton] = useState([true, false, false])

    const handleSaveUser = useCallback((e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        //@ts-ignore
        dispatch(query(SUCCESS_REFRESH_USER, URL_GET_USER, values, getCookie('auth')))
        if (!isLogin) {
            //@ts-ignore
            dispatch(query(SUCCESS_REFRESH_TOKEN, URL_GET_TOKEN, {token: getCookie('token')}))
            //@ts-ignore
            dispatch(query(SUCCESS_REFRESH_USER, URL_GET_USER, values, getCookie('auth')))
        }
    }, [values, isLogin, dispatch])

    const handleCanceled = useCallback((e:SyntheticEvent) => {
        e.preventDefault()
        setValues({name: user.name, email: user.email, password: ''})
    }, [user, setValues])

    const logout = useCallback((e:SyntheticEvent, path:string, onComplete:any) => {
        e.preventDefault()

        dispatch(onComplete)
        navigate(path)
    }, [navigate, dispatch])

    const menuItems = PROFILE_MENU_ITEMS.map((item, index) => {
        return (
            <Button htmlType={"button"}
                    key={index}
                    onClick={item.complete ? (e:SyntheticEvent) => {
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
                        <Button extraClass='' htmlType='button' type="secondary" size="large" onClick={handleCanceled}>Отмена</Button>
                        <Button extraClass='' htmlType='button' type="primary" size="large">Сохранить</Button>
                    </div>) : null}
                </form>

            </section>

        </main>
    );
};

export default Profile;