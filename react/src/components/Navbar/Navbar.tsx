import { CiMenuBurger } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'

import styles from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_menu} >
                <CiMenuBurger className={styles.navbar_menu_icon} />
            </div>

            <div className={styles.navbar_links}>
                links
            </div>
            
            <div className={styles.navbar_user}>
                <CiUser className={styles.navbar_user_icon}/>
            </div>
        </nav>
    )
}