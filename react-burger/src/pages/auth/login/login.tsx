import {ChangeEvent, useCallback} from "react";

import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from '../auth-css.module.scss'
import {useNavigate} from "react-router-dom";
import {URL_LOGIN_USER as url} from "../../../utils/URL";
import useInput from "../../../custom-hooks/input/use-input";
import {useDispatch} from "../../../custom-hooks/redux/dipatch/use-dispatch";
import {requestUser} from "../../../services/actions/user-actions";
import {userSuccess as successUserAction} from "../../../services/reducers/user-reducer";

type TInput = {
    email: string
    password: string
}

const Login = () => {


    const navigate = useNavigate();


    const {values, handleChange} = useInput<TInput>({email: '', password: ''});

    const dispatch = useDispatch();

    const handleSubmit = useCallback((e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(requestUser({successUserAction, url, values}));
    }, [values, dispatch]);

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>

                <h1 className={`mb-6 text text_type_main-medium ${styles.header}`}>Вход</h1>

                <form className={`mb-20 ${styles.main}`} onSubmit={handleSubmit}>
                    <EmailInput
                        name={'email'}
                        placeholder={'E-mail'}
                        onChange={handleChange}
                        value={values.email}
                        extraClass="ml-1"
                    />
                    <PasswordInput
                        name={'password'}
                        placeholder={'Пароль'}
                        onChange={handleChange}
                        value={values.password}
                    />
                    <Button type={'primary'} htmlType={'submit'}>Войти</Button>
                </form>

                <footer className={styles.footer}>
                    <div className={`mb-4 text text_type_main-default text_color_inactive ${styles.to}`}>
                        <p>Вы — новый пользователь?</p>
                        <Button htmlType={'button'} type={'secondary'} size={'large'}
                                onClick={() => navigate('/register')} extraClass={styles.button}>
                            Зарегистрироваться
                        </Button>
                    </div>
                    <div className={`text text_type_main-default text_color_inactive ${styles.to}`}>
                        <p>Забыли пароль?</p>
                        <Button htmlType={'button'} type={'secondary'} size={'large'}

                                onClick={() => navigate('/forgot-password')}
                                extraClass={styles.button}>
                            Восстановить пароль
                        </Button>
                    </div>
                </footer>
            </section>
        </main>
    );
};

export default Login;