import styles from './Products.module.scss'
import { Searchbar } from '../../components/Searchbar/Searchbar'
import { ProductList } from '../../components/List/Products/Productlist'

function Products(){
    return (
        <>
            <div className={styles.page}>
                <Searchbar />
                <ProductList />
            </div>
        </>
    )
}

export default Products