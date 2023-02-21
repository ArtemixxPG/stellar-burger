import {useCallback, useRef, useState} from "react";

import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from '../auth-css.module.scss'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {query, SUCCESS_REQUEST_LOGIN_USER} from "../../../services/actions/user-actions";
import {URL_LOGIN_USER} from "../../../utils/URL";


const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const changeEmail = useCallback(e => setEmail(e.target.value), [email]);
    const changePassword = useCallback(e => setPassword(e.target.value), [password]);
    const handleSubmit = useCallback(e => {
        e.preventDefault();
        dispatch(query(SUCCESS_REQUEST_LOGIN_USER, URL_LOGIN_USER, {email, password},null));
    }, [email, password, dispatch]);

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>
                <header className={`mb-6 text text_type_main-medium ${styles.header}`}>
                    <h3>Вход</h3>
                </header>

                <form className={`mb-20 ${styles.main}`} onSubmit={handleSubmit}>
                    <EmailInput
                        placeholder={'E-mail'}
                        onChange={changeEmail}
                        value={email}
                        extraClass="ml-1"
                    />
                    <PasswordInput
                        placeholder={'Пароль'}
                        onChange={changePassword}
                        value={password}
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