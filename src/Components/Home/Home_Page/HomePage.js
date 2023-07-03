import React from 'react';
import styles from './homepage.module.css';
import Navbar from '../Nav_Bar/Navbar';

function HomePage() {
  return (
    <div className={styles.main} >
      <Navbar/>
      <div className={styles.txt} >
      <p>“Take care of your <a style={{color:"red"}}>body</a></p>
      <p>It's the only place you</p>
      <p>have to <a style={{color:"red"}}>live</a>.”</p>
      <button className={styles.btn} >Join With Us</button>
      </div>
    </div>
  )
}

export default HomePage
