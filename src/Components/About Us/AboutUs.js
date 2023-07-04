import React from 'react';
import styles from './aboutUs.module.css';
import AboutUsHomePage from './about us home page/AboutUsHomePage';
import Navbar from '../Home/Nav_Bar/Navbar';
import AboutInfo from './about info/AboutInfo';
import Footer from '../Home/Footer/Footer';

function AboutUs() {
  return (
    <div>
      <AboutUsHomePage/>
      <AboutInfo/>
      <Footer/>
    </div>
  )
}

export default AboutUs
