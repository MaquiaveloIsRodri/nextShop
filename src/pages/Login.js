import React, { useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@styles/Login.module.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data);
	};

	return (
		<>
			<Head>
				<title>
					Login
				</title>
			</Head>
			<div className={styles.Login}>
				<div className={styles['Login-container']}>
					<form action="/" className={styles.form} ref={form}>
						<label htmlFor="email" className={styles.label}>Email address</label>
						<input type="text" name="email" placeholder="email@email.com" className={styles['input-email', 'input']} />
						<label htmlFor="password" className={styles.label}>Password</label>
						<input type="password" name="password" placeholder="*********" className={styles['input']} />
						<button
							onClick={handleSubmit}
							className={styles['login-button']}>
							Log in
						</button>
						<Link href="/password-recovery">Forgot my password</Link>
					</form>
					<Link
						type='submit'
						className={styles['secondary-button']}
						href='/sign-up'
					>Sign up</Link>
				</div>
			</div >
		</>
	);
};

export default Login;