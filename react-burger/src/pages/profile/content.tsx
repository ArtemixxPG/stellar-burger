import {ChangeEvent, SyntheticEvent, useCallback} from 'react';
import styles from "./profile.module.scss";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "../../custom-hooks/redux/selectors/use-selectors";
import useInput from "../../custom-hooks/input/use-input";
import {useDispatch} from "../../custom-hooks/redux/dipatch/use-dispatch";
import {getCookie} from "../../utils/cookie";
import {requestUser} from "../../services/actions/user-actions";
import {URL_GET_USER} from "../../utils/URL";


const Content = () => {
    const {userSelector} = useSelector()
    const user = userSelector.user

    const {values, handleChange, setValues} = useInput({name: user.name, email: user.email, password: ''});

    const dispatch = useDispatch()


    const handleSubmit = useCallback((e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const token = getCookie('auth')
        dispatch(requestUser({success: true, url: URL_GET_USER, values, token}))
    }, [values, dispatch])

    const handleCanceled = useCallback((e:SyntheticEvent) => {
        e.preventDefault()
        setValues({name: user.name, email: user.email, password: ''})
    }, [user, setValues])
    return (
        <>
            <form className={styles.edit} onSubmit={handleSubmit}>
                <Input name="name" placeholder={'Имя'} value={values.name} onChange={handleChange}/>
                <EmailInput name="email" placeholder={'E-mail'} value={values.email} onChange={handleChange}/>
                <PasswordInput name="password" placeholder={'Пароль'} value={values.password}
                               onChange={handleChange}/>
                {values.email && values.password && values.name ? (<div className={styles.buttons}>
                    <Button extraClass='' htmlType='button' type="secondary" size="large" onClick={handleCanceled}>Отмена</Button>
                    <Button htmlType='submit' type='primary' size='large'>Сохранить</Button>
                </div>) : null}
            </form>
        </>
    );
};

export default Content;