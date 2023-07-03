import React from 'react';
import styles from './aboutUsHomePage.module.css';
// import Navbar from '../../Nav_Bar/Navbar';
import Navbar from '../../Home/Nav_Bar/Navbar';

function AboutUsHomePage() {
  return (
    <div className={styles.main} >
      <Navbar/>
      <p className={styles.mainHeading}>About Us</p>
    </div>
  )
}

export default AboutUsHomePage
