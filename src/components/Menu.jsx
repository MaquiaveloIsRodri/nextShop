import React from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link href="/My-account">My account</Link>
				</li>
				<li>
					<Link href="/Login">Log In</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
