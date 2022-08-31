import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import icon from '@icons/flechita.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
	const { state, clickCloseOrder } = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accu, value) => accu + value.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};
	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image
					src={icon} alt="arrow"
					className={styles['title-arrow']}
					onClick={() => clickCloseOrder()}
				/>
				<p className={styles['title']}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{
					state.cart.map(product => {
						return <OrderItem
							product={product}
							key={`orderItem-${product.id}`}
						/>;
					})
				}
				<div className={styles['order']}>
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<Link
					href="/checkout"
				>
					Checkout
				</Link>
			</div>
		</aside>
	);
};

export default MyOrder;
