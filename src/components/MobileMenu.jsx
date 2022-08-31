import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Link from 'next/link';
import styles from '@styles/MobileMenu.module.scss';

const MobileMenu = () => {
    const { clickShowMenu} = useContext(AppContext);
    return (
        <div className={styles.mobileMenu}>
            <ul>
                <li>
                    <p>CATEGORIES</p>
                </li>
                <li>
                    <button className={styles.button} onClick={() => clickShowMenu()}>
                        <Link
                            href="/"
                        >All</Link>
                    </button>
                </li>
                <li>
                    <button className={styles.button} onClick={() => clickShowMenu()}>
                        <Link href="/">Clothes</Link>
                    </button>
                </li>
                <li>
                    <button className={styles.button} onClick={() => clickShowMenu()}>
                    <Link href="/">Electronics</Link>
                    </button>
                </li>
                <li>
                    <button className={styles.button} onClick={() => clickShowMenu()}>
                        <Link href="/">Furnitures</Link>
                    </button>
                </li>
                <li>
                    <button className={styles.button} onClick={() => clickShowMenu()}>
                        <Link href="/">Toys</Link>
                    </button>
                </li>
                <li>
                    <button className={styles.button} onClick={() => clickShowMenu()}>
                        <Link href="/">Other</Link>
                    </button>
                </li>
            </ul>

            <ul>
                <li>
                    <button className={styles.button}  onClick={() => clickShowMenu()}>
                        <Link href="/My-account">My account</Link>
                    </button>
                </li>
            </ul>
            <ul>
                <li>
                    <button className={styles.button} onClick={() => clickShowMenu()}>
                        <Link href="/My-account" className={styles['email']}>matiaschiodo@gmail.com</Link>
                    </button>
                </li>
                <li>
                    <button className={styles.button} onClick={() => clickShowMenu()}>
                        <Link href="/sign-up" className={styles['sign-out']} >Sign out</Link>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;