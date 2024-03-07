import styles from './Productlist.module.scss'
import { useState, useEffect } from 'react'
import { IProduct } from '../../../interfaces/Product'
import productsData from '../../../data/Products.json'

export const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        setProducts(productsData.products)
    }, [])

    return (
        <>
            <ul className={styles.list}>
                {products.map((p) => (
                    <li className={styles.list__item}>
                        <h1 className={styles.list__item_header}>{p.name}</h1>
                        <div className={styles.list__item_body}>
                            <img className={styles.list__item_img} src={p.image_url} alt={p.name} />
                            <div className={styles.list__item_desc}>
                                <p className={styles.list__item_price}>${p.price}.00</p>
                                <div>
                                    <button className='btn-primary'>Detalles</button>
                                    <button className='btn-secondary'>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}