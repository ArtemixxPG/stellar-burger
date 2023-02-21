import styles from "../auth-css.module.scss";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {query, SUCCESS_REQUEST_REGISTER_USER} from "../../../services/actions/user-actions";
import {URL_REGISTER_USER} from "../../../utils/URL";

const Register = () => {




    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const changeName = useCallback( e => {
        setName(e.target.value);
    }, [name])

    const changeEmail = useCallback( e => {
        setEmail(e.target.value);
    }, [email])

    const changePassword = useCallback( e => {
        setPassword(e.target.value);
    }, [password])

    const handleSubmit = useCallback( e => {
        e.preventDefault();
        dispatch(query(SUCCESS_REQUEST_REGISTER_USER, URL_REGISTER_USER, {email, password, name}))

    }, [name, email, password, dispatch])

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>
                <header className={`mb-6 text text_type_main-medium ${styles.header}`}>
                    <h3>Регистрация</h3>
                </header>

                <form className={`mb-20 ${styles.main}`} onSubmit={handleSubmit}>
                    <Input
                        placeholder={'Имя'}
                        value={name}
                        onChange={changeName}
                    />
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
                    <Button type={'primary'} htmlType={'submit'}>Зарегистрироваться</Button>
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