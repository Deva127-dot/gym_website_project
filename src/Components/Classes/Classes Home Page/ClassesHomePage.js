import React from 'react';
import styles from './classesHomePage.module.css';
import Navbar from '../../Home/Nav_Bar/Navbar';

function ClassesHomePage() {
  return (
    <div className={styles.main} >
      <Navbar/>
      <p className={styles.heading} >Classes we Schedule</p>
    </div>
  )
}

export default ClassesHomePage
