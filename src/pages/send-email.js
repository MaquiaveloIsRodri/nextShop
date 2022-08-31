import React from 'react';
import icon from '@icons/email.svg';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@styles/SendEmail.module.scss';
const SendEmail = () => {
    return (
        <>
            <Head>
                <title>
                    Send Email
                </title>
            </Head>
            <div className={styles.login}>
                <div className={styles['form-container']}>
                    <h1 className={styles.title}>Email has been sent!</h1>
                    <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
                    <div className={styles["email-image"]}>
                        <Image src={icon} alt="email" />
                    </div>
                    <Link
                        type='submit'
                        className={styles['primary-button']}
                        href={'/Login'}
                    >Login
                    </Link>
                    <p className={styles.resend}>
                        <span className={styles.resendSpan}>Didnt receive the email?</span>
                        <Link href="/">Resend</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SendEmail;