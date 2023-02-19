import styles from "../auth-css.module.scss";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>
                <header className={`mb-6 text text_type_main-medium ${styles.header}`}>
                    <h3>Регистрация</h3>
                </header>

                <form className={`mb-20 ${styles.main}`}>
                    <Input
                        placeholder={'Имя'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <EmailInput
                        placeholder={'E-mail'}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        extraClass="ml-1"
                    />
                    <PasswordInput
                        placeholder={'Пароль'}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <Button type={'primary'} htmlType={'submit'} onClick={() => {
                    }}>Зарегистрироваться</Button>
                </form>

                <footer className={styles.footer}>
                    <div className={`mb-4 text text_type_main-default text_color_inactive ${styles.to}`}>
                        <p>Уже зарегитстрированы?</p>
                        <Button htmlType={'button'} type={'secondary'} size={'large'}
                                onClick={() => navigate('/login')} extraClass={styles.button}>
                            Войти
                        </Button>
                    </div>
                </footer>
            </section>
        </main>
    );
};

export default Register;