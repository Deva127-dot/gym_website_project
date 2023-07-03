import React from 'react';
import styles from './blogsHome.module.css';
import Navbar from '../../Home/Nav_Bar/Navbar';

function BlogsHome() {
  return (
    <div className={styles.main} >
      <Navbar/>
      <p className={styles.mainHeading}>Blogs & Articles</p>
    </div>
  )
}

export default BlogsHome
