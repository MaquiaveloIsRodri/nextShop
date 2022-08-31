import React from 'react';
import Link from 'next/link';
import styles from '@styles/MobileMenu.module.scss';

const MobileMenu = () => {
    return (
        <div className={styles.mobileMenu}>
            <ul>
                <li>
                    <p>CATEGORIES</p>
                </li>
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
                    <Link href="/">Other</Link>
                </li>
                </ul>

                <ul>
                <li>
                    <Link href="/My-account">My account</Link>
                </li>
                </ul>

                <ul>
                <li>
                    <Link href="/My-account" className={styles['email']}>matiaschiodo@gmail.com</Link>
                </li>
                <li>
                    <Link href="/sign-up" className={styles['sign-out']}>Sign out</Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;