"use client"
import React from 'react';
import styles from './ThankYou.module.css';

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="/images/icon-thank-you.svg" alt="Check Icon" />
      </div>
      <h2 className={styles.title}>Thank you!</h2>
      <p className={styles.message}>
        Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
