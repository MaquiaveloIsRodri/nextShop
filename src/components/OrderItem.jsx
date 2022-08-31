import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import Image from 'next/image';
import styles from'@styles/OrderItem.module.scss';


const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);
	const DeleteCharacter = () => {
		const title16 = product.title;
		if (product.title.length !== 16) {
			const title = product.title.substring(0, product.title.length - (product.title.length - 16));
			return title.concat('...');
		}
		return title16;
	};
	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image width={50} height={50} src={product?.image} alt="bike" />
			</figure>
			<p>{DeleteCharacter()}</p>
			<p>${product?.price}</p>
			<Image
				src={close}
				alt="close"
				className={styles['order-close-item']}
				onClick={() => removeFromCart(product)}
			/>
		</div>
	);
};

export default OrderItem;
