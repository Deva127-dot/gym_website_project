import React from 'react';
import styles from './homePg.module.css';
import Navbar from './Components/Home/Nav_Bar/Navbar';

function HomePg() {
  return (
    <div className={styles.main} >
      <Navbar/>
      <div className={styles.txt} >
      <p> New Strength</p>
      <p>New Beginnings</p>
      <button className={styles.btn} >Join With Us</button>
      </div>
    </div>
  )
}

export default HomePg;
