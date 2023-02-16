import {useState} from "react";
import styles from './profile.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {PROFILE_MENU_ITEMS} from "../../utils/constants";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

const Profile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const menuItems = PROFILE_MENU_ITEMS.map((item) => {
        return (
            <Button htmlType={"button"}
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    size={'large'}
                    type={'secondary'}
                    extraClass={`text text_type_main-medium text_color_inactive ${styles.button}`}
            >{item.name}</Button>
        )
    })

    return (
        <main className={`mt-30 ${styles.wrapper}`}>
            <section className={`pl-3 ${styles.content}`}>
               <div className={styles.menu}>
                   {menuItems}
               </div>

            </section>

        </main>
    );
};

export default Profile;