import React from 'react';
import ProductInfo from '../components/ProductInfo';
import Image from 'next/image';
import '../styles/ProductDetail.scss';
import icon from '@icons/icon_close.png';
const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<Image src={icon} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
};

export default ProductDetail;
