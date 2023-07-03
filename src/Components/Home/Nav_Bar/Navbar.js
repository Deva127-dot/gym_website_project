import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.main} >
      <Link to='/' className={styles.link}> <div className={styles.gym} >
        GYM
      </div></Link>
      <div className={styles.options} >
        <Link to='/home' className={styles.link2}><a className={styles.opt} >Home</a></Link>
        <Link to='/aboutUs' className={styles.link2}><a className={styles.opt} >About Us</a></Link>
        <Link to='/classes' className={styles.link2}><a className={styles.opt} >Classes</a></Link>
        <Link to='/blogs' className={styles.link2}> <a className={styles.opt} >Blogs</a></Link>
      </div>
      <div className={styles.btnDiv} >
        <button className={styles.btn} >Join Us</button>
      </div>
    </div>
  )
}

export default Navbar
