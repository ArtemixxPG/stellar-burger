import styles from "../auth-css.module.scss";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {memo, useCallback, useState} from "react";
import {sentRequest} from "../../../services/auth/reset-password-request";
import {URL_SENT_EMAIL} from "../../../utils/URL";


const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const navigate = useNavigate()


    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        if(email) {
            sentRequest(URL_SENT_EMAIL, {email}, navigate, '/reset-password').then()
        }

    }, [email, navigate])

    const changeEmail = useCallback((e)=>{
        e.preventDefault()
        setEmail(e.target.value)
    }, [email])

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>
                <header className={`mb-6 text text_type_main-medium ${styles.header}`}>
                    <h3>Восстановление пароля</h3>
                </header>

                <form className={`mb-20 ${styles.main}`} onSubmit={handleSubmit}>
                    <EmailInput
                        placeholder={'E-mail'}
                        onChange={changeEmail}
                        value={email}
                        extraClass="ml-1"
                        autoFocus
                    />
                    <Button type={'primary'} htmlType={'submit'}>Восстановить</Button>
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

export default memo(ForgotPassword);