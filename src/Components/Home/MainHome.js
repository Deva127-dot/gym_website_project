import React from 'react';
import styles from './mainHome.module.css';
import HomePage from './Home_Page/HomePage';
import About from './About/About';
import Footer from './Footer/Footer';

function MainHome() {
  return (
    <div className={styles.main} >
    <HomePage/>
    <About/>
    <Footer/>
    </div>
  )
}

export default MainHome;
