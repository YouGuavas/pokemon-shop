import Image from 'next/image'


import styles from '../../styles/ProductListing.module.scss';

type product = {
    title: string,
    id: string,
    image: string,
    description: string,
    price: string,
    stock: number
}
export default function ProductListing(props: { product: product }) {
    const product = props.product;

    const renderStock = () => {
        if (props.product.stock < 2) {
            return <p className={styles.hurry}>Hurry! Only {props.product.stock} left!</p>
        } else {
            return <p></p>
        }
    }



    return (
        <div className={styles.listCard}>
            <h4>{props.product.title}</h4>
            <Image src={props.product.image} alt={`Preview of ${props.product.title}`} height={200} width={150} />
            <p>${props.product.price}</p>
            {renderStock()}
            <button className="snipcart-add-item"
                data-item-id={product.id}
                data-item-image={product.image}
                data-item-name={product.title}
                data-item-price={product.price}
                data-item-url='/'
                data-item-max-quantity={product.stock}>Add to cart</button>
        </div>
    )
}