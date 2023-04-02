import {ChangeEvent, SyntheticEvent, useCallback} from "react";
import styles from './profile.module.scss'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {requestUser} from "../../services/actions/user-actions";
import {URL_GET_TOKEN, URL_GET_USER} from "../../utils/URL";
import {getCookie} from "../../utils/cookie";
import useInput from "../../custom-hooks/input/use-input";
import {useSelector} from "../../custom-hooks/redux/selectors/use-selectors";
import {refreshTokens} from "../../services/refresh-token/refresh-token";
import {useDispatch} from "../../custom-hooks/redux/dipatch/use-dispatch";
import {userRefresh as successUserAction} from "../../services/reducers/user-reducer";
import UserSidebar from "../../componets/user-sidebar/user-sidebar";

const Profile = () => {

    const {userSelector} = useSelector()
    const user = userSelector.user
    const isLogin = userSelector.isLogIn

    const {values, handleChange, setValues} = useInput({name: user.name, email: user.email, password: ''});

    const dispatch = useDispatch()


    const handleSaveUser = useCallback((e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const token = getCookie('auth')
        dispatch(requestUser({successUserAction, url: URL_GET_USER, values, token}))
        if (!isLogin) {
            refreshTokens(URL_GET_TOKEN, getCookie('token')).then()
            dispatch(requestUser({successUserAction, url: URL_GET_USER, values, token}))
        }
    }, [values, isLogin, dispatch])

    const handleCanceled = useCallback((e:SyntheticEvent) => {
        e.preventDefault()
        setValues({name: user.name, email: user.email, password: ''})
    }, [user, setValues])




    return (
        <main className={`mt-30 ${styles.wrapper}`}>
            <section className={`pl-3 ${styles.content}`}>
                <div className={`mr-15 ${styles.menu}`}>
                    <UserSidebar primaryIndex={0}/>
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