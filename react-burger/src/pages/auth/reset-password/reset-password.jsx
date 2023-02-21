import styles from "../auth-css.module.scss";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {useCallback, useState} from "react";
import {sentRequest} from "../../../services/auth/reset-password-request";
import {URL_RESET_PASSWORD} from "../../../utils/URL";

const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const navigate = useNavigate();


    const changePassword = useCallback(
        e => {
            setPassword(e.target.value)
        },
        [password]
    );

    const changeToken = useCallback(e => {
        setToken(e.target.value)
    }, [token]);

    const handleSubmit = useCallback(e =>{
        e.preventDefault();
        sentRequest(URL_RESET_PASSWORD, {password, token}, navigate, "/login").then();
    }, [navigate, password, token])

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>
                <header className={`mb-6 text text_type_main-medium ${styles.header}`}>
                    <h3>Восстановление пароля</h3>
                </header>

                <form className={`mb-20 ${styles.main}`} onSubmit={handleSubmit} >
                    <PasswordInput
                        placeholder={'Введите новый пароль'}
                        onChange={changePassword}
                        value={password}
                    />
                    <Input placeholder={'Введите код из письма'}
                           value={token}
                           onChange={changeToken}/>
                    <Button type={'primary'} htmlType={'submit'} >Сохранить</Button>
                </form>

                <footer className={styles.footer}>
                    <div className={`mb-4 text text_type_main-default text_color_inactive ${styles.to}`}>
                        <p>Вы — новый пользователь?</p>
                        <Button htmlType={'button'} type={'secondary'} size={'large'}
                                 extraClass={styles.button} onClick={() => navigate('/register')}>
                            Зарегистрироваться
                        </Button>
                    </div>
                    <div className={`text text_type_main-default text_color_inactive ${styles.to}`}>
                        <p>Вспомнили пароль?</p>
                        <Button htmlType={'button'} type={'secondary'} size={'large'}

                                onClick={() => navigate('/login')}
                                extraClass={styles.button}>
                            Войти
                        </Button>
                    </div>
                </footer>
            </section>
        </main>
    );
};

export default ResetPassword;