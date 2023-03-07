import styles from "../auth-css.module.scss";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useCallback} from "react";
import {sentRequest} from "../../../services/auth/reset-password-request";
import {URL_RESET_PASSWORD} from "../../../utils/URL";
import useInput from "../../../custom-hooks/input/use-input";


type TInput = {
    password: string
    token: string
}
const ResetPassword = () => {

    const {values, handleChange} = useInput<TInput>({password: '', token: ''});


    const navigate = useNavigate();


    const handleSubmit = useCallback((e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = `${URL_RESET_PASSWORD}`;
        const path = '/login'
        sentRequest({url, values, navigate, path}).then();
    }, [navigate, values])

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>

                <h1 className={`mb-6 text text_type_main-medium ${styles.header}`}>Восстановление пароля</h1>


                <form className={`mb-20 ${styles.main}`} onSubmit={handleSubmit}>
                    <PasswordInput
                        name="password"
                        placeholder={'Введите новый пароль'}
                        onChange={handleChange}
                        value={values.password}
                    />
                    <Input placeholder={'Введите код из письма'}
                           name="token"
                           value={values.token}
                           onChange={handleChange}/>
                    <Button type={'primary'} htmlType={'submit'}>Сохранить</Button>
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