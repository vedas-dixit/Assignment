"use client"
import React, { useState } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Summary from '../components/Summary';
import ThankYou from '../components/thankyou';
import styles from './page.module.css';

const Home = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const nextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const confirm = () => {
    console.log('Order confirmed:', formData);
    setConfirmed(true);
  };

  const steps = ['Your Info', 'Select Plan', 'Add-ons', 'Summary'];

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {steps.map((stepName, index) => (
          <div
            key={index}
            className={`${styles.step} ${step === index + 1 ? styles.active : step > index + 1 ? styles.completed : ''}`}
          >
            <div className={styles['step-number']}>{index + 1}</div>
            <div className={styles['step-text']}><g className={styles.stepname}>Step {index + 1}</g><br />{stepName}</div>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {confirmed ? (
          <ThankYou />
        ) : (
          <>
            {step === 1 && <Step1 data={formData} next={nextStep} />}
            {step === 2 && <Step2 data={formData} next={nextStep} back={prevStep} />}
            {step === 3 && <Step3 data={formData} next={nextStep} back={prevStep} />}
            {step === 4 && <Summary data={formData} back={prevStep} confirm={confirm} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
