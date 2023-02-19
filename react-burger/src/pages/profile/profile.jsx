import {useState} from "react";
import styles from './profile.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {PROFILE_MENU_ITEMS} from "../../utils/constants";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const Profile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const menuItems = PROFILE_MENU_ITEMS.map((item) => {
        return (
            <Button htmlType={"button"}
                    key={item.path}
                    onClick={ () => navigate(item.path)}
                    size={'large'}
                    type={'secondary'}
                    extraClass={`text text_type_main-medium text_color_inactive ${styles.button}`}
            >{item.name}</Button>
        )
    })

    const logout = (path, onComplete) => {
        navigate(path)
        onComplete()
    }

    return (
        <main className={`mt-30 ${styles.wrapper}`}>
            <section className={`pl-3 ${styles.content}`}>
               <div className={styles.menu}>
                   {menuItems}
               </div>
                <div className={styles.edit}>
                    <Input  placeholder={'Имя'} value={name} onChange={e => setName(e.target.value)}/>
                    <EmailInput placeholder={'E-mail'} value={email} onChange={e => setEmail(e.target.value)}/>
                    <PasswordInput placeholder={'Пароль'} value={password} onChange={e => setPassword(e.target.value)}/>
                    {email && password && name ? (<div className={styles.buttons}>
                        <Button type="secondary" size="large">Отмена</Button>
                        <Button type="primary" size="large">Сохранить</Button>
                    </div>) : null}
                </div>

            </section>

        </main>
    );
};

export default Profile;