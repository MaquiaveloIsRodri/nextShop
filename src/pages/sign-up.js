import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@styles/CreateUser.module.scss';
const MyAccount = () => {
    return (
        <>
            <Head>
                <title>
                    Sign up
                </title>
            </Head>
            <div className={styles.CreateAccount}>
                <div className={styles["CreateAccount-container"]}>
                    <h1 className={styles.title}>Create you user</h1>
                    <form action="/" className={styles.form}>
                        <form className={styles.form}>
                            <label htmlFor="name" className={styles.label}>Name:</label>
                            <input type="text" id="name" placeholder="Teff" className={styles.input} />
                            <label htmlFor="email" className={styles.label}>Email:</label>
                            <input type="text" id="email" placeholder="platzi@example.com" className={styles.input} />
                            <label htmlFor="password" className={styles.label}>Password:</label>
                            <input type="password" id="password" placeholder="*********" className={styles.input} />
                        </form>
                        <Link type="submit" href="/" className={styles['primary-button']}>
                            Create
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyAccount;