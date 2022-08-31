import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@styles/RecoveryPassword.module.scss';
const PasswordRecovery = () => {
	return (
		<>
			<Head>
				<title>
					Recovery Password
				</title>
			</Head>
			<div className={styles.PasswordRecovery}>
				<div className={styles['PasswordRecovery-container']}>
					<h1 className={styles.title}>Password recovery</h1>
					<p className={styles.subtitle}>Inform the email address used to create your account</p>
					<form action="/" className={styles.form}>
						<label htmlFor="email" className={styles.label}>Email address</label>
						<input type="text" id="email" className={styles.input} />
						<Link
							type='submit'
							className={styles['primary-button']}
							href={'/send-email'}
						>Confirm</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default PasswordRecovery;
