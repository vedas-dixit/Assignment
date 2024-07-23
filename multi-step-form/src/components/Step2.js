import React, { useState } from 'react';
import styles from './Step2.module.css';
import ToggleSwitch from './ToggleSwitch';

const Step2 = ({ data, next, back }) => {
  const [plan, setPlan] = useState(data.plan || 'Arcade');
  const [billing, setBilling] = useState(data.billing || 'Monthly');

  const handleNext = () => {
    next({ plan, billing });
  };

  const getPrice = (plan) => {
    const monthlyPrices = {
      Arcade: 9,
      Advanced: 12,
      Pro: 15,
    };
    const yearlyPrices = {
      Arcade: 90,
      Advanced: 120,
      Pro: 150,
    };
    return billing === 'Monthly' ? monthlyPrices[plan] : yearlyPrices[plan];
  };

  return (
    <div className={styles.container}>
      <div className={styles.heads}>
        <h2 className={styles.title}>Select your plan</h2>
        <p className={styles.subtitle}>You have the option of monthly or yearly billing.</p>
      </div>
      <div className={styles.planOptions}>
        <div className={`${styles.planOption} ${plan === 'Arcade' ? styles.selected : ''}`} onClick={() => setPlan('Arcade')}>
          <img src='/images/arc.svg' alt="Arcade" />
          <div>
            <h3>Arcade</h3>
            <p>${getPrice('Arcade')}/{billing === 'Monthly' ? 'mo' : 'yr'}</p>
          </div>
        </div>
        <div className={`${styles.planOption} ${plan === 'Advanced' ? styles.selected : ''}`} onClick={() => setPlan('Advanced')}>
          <img src='/images/adv.svg' alt="Advanced" />
          <div>
            <h3>Advanced</h3>
            <p>${getPrice('Advanced')}/{billing === 'Monthly' ? 'mo' : 'yr'}</p>
          </div>
        </div>
        <div className={`${styles.planOption} ${plan === 'Pro' ? styles.selected : ''}`} onClick={() => setPlan('Pro')}>
          <img src='/images/pro.svg' alt="Pro" />
          <div>
            <h3>Pro</h3>
            <p>${getPrice('Pro')}/{billing === 'Monthly' ? 'mo' : 'yr'}</p>
          </div>
        </div>
      </div>
      <ToggleSwitch billing={billing} setBilling={setBilling} />

      <div className={styles.buttonContainer}>
        <button onClick={back} className={`${styles.button} ${styles.backButton}`}>Go Back</button>
        <button onClick={handleNext} className={styles.button}>Next Step</button>
      </div>
    </div>
  );
};

export default Step2;
