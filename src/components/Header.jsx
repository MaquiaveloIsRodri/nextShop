import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '../asset/logos/logo_yard_sale.svg';
import shoppingCard from '@icons/icon_shopping_cart.svg';
import MyOrder from '@containers/MyOrders';
import MobileMenu from '@components/MobileMenu';
import AppContext from '@context/AppContext';
import styles from '@styles/Header.module.scss';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };
    const { state, clickShowMenu, showMenu, toggleOrders, clickShowOrders } = useContext(AppContext);
    return (
        <nav className={styles.Nav}>
            <button className={styles.menuButton} onClick={() => clickShowMenu()}>
            <img
                src={menu.src}
                alt="menu"
                className={styles.menu}
            />
            </button>
            <div className={styles['navbar-left']}>
                <Link href='/'>
                    <Image src={logo} alt="logo" className={styles.logo} />
                </Link>
                <ul>
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="/">Toys</Link>
                    </li>
                    <li>
                        <Link href="/">Others</Link>
                    </li>
                </ul>
            </div>
            <div className={styles['navbar-right']}>
                <ul>
                    <button
                        className={styles['navbar-email']}
                        onClick={handleClick}
                    >
                        platzi@example.com
                    </button>
                    <button
                        className={styles['navbar-shopping-cart']}
                        onClick={() => clickShowOrders()}
                    >
                        <Image src={shoppingCard} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </button>
                </ul>
            </div>
            {toggle && <Menu />}
            {showMenu && <MobileMenu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
};

export default Header;