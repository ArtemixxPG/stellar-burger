import styles from "../auth-css.module.scss";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmCode, setConfirmCode] = useState("");

    const navigate = useNavigate();

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>
                <header className={`mb-6 text text_type_main-medium ${styles.header}`}>
                    <h3>Восстановление пароля</h3>
                </header>

                <form className={`mb-20 ${styles.main}`}>
                    <PasswordInput
                        placeholder={'Введите новый пароль'}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <Input placeholder={'Введите код из письма'}
                           value={confirmCode}
                           onChange={confirmCode => setConfirmCode(confirmCode.target.value)}/>
                    <Button type={'primary'} htmlType={'submit'} onClick={() => {navigate('/login')
                    }}>Сохранить</Button>
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

export default ResetPassword;