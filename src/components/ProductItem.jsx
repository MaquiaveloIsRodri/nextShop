import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = item => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item);
	};
	const DeleteCharacter = () => {
		const title16 = product.title;
		if (product.title.length !== 16) {
			const title = product.title.substring(0, product.title.length - (product.title.length - 16));
			return title.concat(' ...');
		}
		return title16;

	};

	return (
		<div className={styles.ProductItem}>
			<Image src={product.image} width={240} height={240} alt={product.title} />
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{DeleteCharacter()}</p>
				</div>
				<button className={styles['more-clickable-area']} onClick={() => handleClick(product)} >
					{state.cart.includes(product)
						? <Image
							className={styles.disabled && styles['add-to-cart-btn']}
							src={addedToCartImage}
							alt="added to cart"
						/>
						: <Image
							className={styles['add-to-cart-btn'] && styles.pointer}
							src={addToCartImage}
							alt="add to cart"
						/>}
				</button>
			</div>
		</div>
	);
};

export default ProductItem;