import React, { useContext } from 'react';
import Head from 'next/head';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state } = useContext(AppContext);
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            {
              state.cart.map(item => {
                const DeleteCharacter = () => {
                  const title16 = item.title;
                  if (item.title.length !== 16) {
                    const title = item.title.substring(0, item.title.length - (item.title.length - 16));
                    return title.concat('...');
                  }
                  return title16;
                };
                return <div key={`checkout-${item.id}`} className={styles.OrderItem}>
                  <figure>
                    <Image width={70} height={70} src={item?.image} className={styles.image} alt="bike" />
                  </figure>
                  <p className={styles.titleProduct}>{DeleteCharacter()}</p>
                  <p className={styles.priceProduct}>${item?.price}</p>
                </div>;
              })
            }
            <div className={styles.order}>
              <p>
                <span>
                  {month + 1}.{day}.{year}
                </span>
                <span>{state.cart.length}</span>
              </p>
              <p>$560.00</p>
            </div>
            <button className={styles['login-button']}>To Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
