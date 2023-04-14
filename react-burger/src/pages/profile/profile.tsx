import styles from './profile.module.scss'
import UserSidebar from "../../componets/user-sidebar/user-sidebar";
import {Outlet} from "react-router-dom";

const Profile = () => {

    return (
        <main className={`mt-30 ${styles.wrapper}`}>
            <section className={`pl-3 ${styles.content}`}>
                <div className={`mr-15 ${styles.menu}`}>
                    <UserSidebar/>
                </div>
                <Outlet/>
            </section>

        </main>
    );
};

export default Profile;