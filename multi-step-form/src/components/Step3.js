import React, { useState } from 'react';
import styles from './Step3.module.css';

const Step3 = ({ data, next, back }) => {
  const [addons, setAddons] = useState(data.addons || []);

  const handleAddonChange = (addon) => {
    setAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const handleNext = () => {
    next({ addons });
  };

  const addonPrices = {
    'Online service': data.billing === 'Monthly' ? 1 : 10,
    'Larger storage': data.billing === 'Monthly' ? 2 : 20,
    'Customizable profile': data.billing === 'Monthly' ? 2 : 20,
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <g>
          <h2 className={styles.title}>Pick add-ons</h2>
          <p className={styles.subtitle}>Add-ons help enhance your gaming experience.</p>
        </g>
        <g>
          <div
            className={`${styles.addon} ${addons.includes('Online service') ? styles.selected : ''}`}
            onClick={() => handleAddonChange('Online service')}
          >
            <g className={styles.headlabel}>
              <input
                type="checkbox"
                checked={addons.includes('Online service')}
                onChange={() => handleAddonChange('Online service')}
              />
              <label className={styles.labels}>
                <p className={styles.labels}>Online service<br /><g className={styles.g}>Access to multiplayer games</g></p>
              </label>
            </g>
            <span className={styles.price}>
              +${addonPrices['Online service']}/{data.billing === 'Monthly' ? 'mo' : 'yr'}
            </span>
          </div>
          <div
            className={`${styles.addon} ${addons.includes('Larger storage') ? styles.selected : ''}`}
            onClick={() => handleAddonChange('Larger storage')}
          >
            <g className={styles.headlabel}>
              <input
                type="checkbox"
                checked={addons.includes('Larger storage')}
                onChange={() => handleAddonChange('Larger storage')}
              />
              <label className={styles.labels}>
                <p className={styles.labels}>Larger storage<br /><g className={styles.g}>Extra 1TB of cloud</g></p>
              </label>
            </g>
            <span className={styles.price}>
              +${addonPrices['Larger storage']}/{data.billing === 'Monthly' ? 'mo' : 'yr'}
            </span>
          </div>
          <div
            className={`${styles.addon} ${addons.includes('Customizable profile') ? styles.selected : ''}`}
            onClick={() => handleAddonChange('Customizable profile')}
          >
            <g className={styles.headlabel}>
              <input
                type="checkbox"
                checked={addons.includes('Customizable profile')}
                onChange={() => handleAddonChange('Customizable profile')}
              />
              <label className={styles.labels}>
                <p className={styles.labels}>Customizable Profile<br /><g className={styles.g}>Custom theme on your profile</g></p>
              </label>
            </g>
            <span className={styles.price}>
              +${addonPrices['Customizable profile']}/{data.billing === 'Monthly' ? 'mo' : 'yr'}
            </span>
          </div>


        </g>
        <div className={styles.buttonContainer}>
          <button onClick={back} className={`${styles.button} ${styles.backButton}`}>Go Back</button>
          <button onClick={handleNext} className={styles.button}>Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default Step3;