import React from 'react';
import styles from './Summary.module.css';

const Summary = ({ data, back, confirm }) => {
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

  const planPrice = data.billing === 'Monthly' ? monthlyPrices[data.plan] : yearlyPrices[data.plan];

  const addonPrices = {
    'Online service': data.billing === 'Monthly' ? 1 : 10,
    'Larger storage': data.billing === 'Monthly' ? 2 : 20,
    'Customizable Profile': data.billing === 'Monthly' ? 2 : 20,
  };

  const total =
    planPrice +
    (data.addons.includes('Online service') ? addonPrices['Online service'] : 0) +
    (data.addons.includes('Larger storage') ? addonPrices['Larger storage'] : 0) +
    (data.addons.includes('Customizable Profile') ? addonPrices['Customizable Profile'] : 0);

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div>
          <h2 className={styles.title}>Finishing up</h2>
          <p className={styles.subtitle}>Double-check everything looks OK before confirming.</p>
        </div>
        <div className={styles.planSummary}>
          <div className={styles.planDetails}>
            <div className={styles.innDetails}>
              <p className={styles.planTitle}>{data.plan} ({data.billing})</p>
              <button className={styles.changeButton} onClick={back}>Change</button>
            </div>
            <p className={styles.planPrice}>${planPrice}/{data.billing === 'Monthly' ? 'mo' : 'yr'}</p>
          </div>

          {data.addons.includes('Online service') && (
            <div className={styles.addon}>
              <p>Online service</p>
              <p>+${addonPrices['Online service']}/{data.billing === 'Monthly' ? 'mo' : 'yr'}</p>
            </div>
          )}
          {data.addons.includes('Larger storage') && (
            <div className={styles.addon}>
              <p>Larger storage</p>
              <p>+${addonPrices['Larger storage']}/{data.billing === 'Monthly' ? 'mo' : 'yr'}</p>
            </div>
          )}
          {data.addons.includes('Customizable Profile') && (
            <div className={styles.addon}>
              <p>Customizable Profile</p>
              <p>+${addonPrices['Customizable Profile']}/{data.billing === 'Monthly' ? 'mo' : 'yr'}</p>
            </div>
          )}
        </div>
        <div className={styles.total}>
          <p>Total (per {data.billing === 'Monthly' ? 'month' : 'year'})</p>
          <p className={styles.totalAmount}>${total}/{data.billing === 'Monthly' ? 'mo' : 'yr'}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={back} className={`${styles.button} ${styles.backButton}`}>Go Back</button>
          <button onClick={confirm} className={styles.button}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
