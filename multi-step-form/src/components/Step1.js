import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Step1.module.css';

const Step1 = ({ data, next }) => {
  const formik = useFormik({
    initialValues: {
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
    }),
    onSubmit: (values) => {
      next(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Personal info</h2>
      <p className={styles.subtitle}>Please Provide your name, email address & phone number.</p>
      <label className={styles.label}>Name</label>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className={styles.input}
      />
      {formik.touched.name && formik.errors.name ? <div className={styles.error}>{formik.errors.name}</div> : null}

      <label className={styles.label}>Email Address</label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={styles.input}
      />
      {formik.touched.email && formik.errors.email ? <div className={styles.error}>{formik.errors.email}</div> : null}

      <label className={styles.label}>Phone Number</label>
      <input
        type="tel"
        name="phone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        className={styles.input}
      />
      {formik.touched.phone && formik.errors.phone ? <div className={styles.error}>{formik.errors.phone}</div> : null}
      <g className={styles.buttoncontainer}>
        <button type="submit" className={styles.button}>Next Step</button>
      </g>
    </form>
  );
};

export default Step1;
