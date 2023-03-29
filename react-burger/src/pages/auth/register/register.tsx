import styles from "../auth-css.module.scss";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useCallback} from "react";
import {URL_REGISTER_USER as url} from "../../../utils/URL";
import useInput from "../../../custom-hooks/input/use-input";
import {requestUser} from "../../../services/actions/user-actions";
import {userSuccess as successUserAction} from "../../../services/reducers/user-reducer";
import {useDispatch} from "../../../custom-hooks/redux/dipatch/use-dispatch";


type TInput = {
    email: string
    password: string
    name: string
}

const Register = () => {


    const dispatch = useDispatch();

    const {values, handleChange} = useInput<TInput>({email: '', password: '', name: ''});


    const navigate = useNavigate();


    const handleSubmit = useCallback((e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(requestUser({successUserAction, url, values}))

    }, [values, dispatch])

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>

                <h1 className={`mb-6 text text_type_main-medium ${styles.header}`}>Регистрация</h1>


                <form className={`mb-20 ${styles.main}`} onSubmit={handleSubmit}>
                    <Input
                        name={'name'}
                        placeholder={'Имя'}
                        value={values.name}
                        onChange={handleChange}
                    />
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