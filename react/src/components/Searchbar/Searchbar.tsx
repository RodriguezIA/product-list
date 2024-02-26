import styles from './Searchbar.module.scss'
import { CiSearch } from 'react-icons/ci'
import { CiSquareRemove } from 'react-icons/ci'


export const Searchbar = () => {
    return (
        <>
            <div className={styles.searchbar}>
                <CiSearch className={styles.searchbar_icon_search} />
                <input  className={styles.searchbar_input} type="text" />
                <CiSquareRemove className={styles.searchbar_icon_remove}/>
            </div>
        </>
    )
}