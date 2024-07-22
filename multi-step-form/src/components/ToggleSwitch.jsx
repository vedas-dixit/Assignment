import React from 'react';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = ({ billing, setBilling }) => {
  return (
    <div className={styles.billingOptions}>
      <div 
        className={`${styles.option} ${billing === 'Monthly' ? styles.selected : ''}`} 
        onClick={() => setBilling('Monthly')}
      >
        Monthly
      </div>
      <div className={styles.switch}>
        <div className={`${styles.slider} ${billing === 'Yearly' ? styles.right : ''}`} onClick={() => setBilling(billing === 'Monthly' ? 'Yearly' : 'Monthly')}></div>
      </div>
      <div 
        className={`${styles.option} ${billing === 'Yearly' ? styles.selected : ''}`} 
        onClick={() => setBilling('Yearly')}
      >
        Yearly
      </div>
    </div>
  );
};

export default ToggleSwitch;
