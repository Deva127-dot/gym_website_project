import React from "react";
import styles from "./homePg.module.css";
import Navbar from "./Components/Home/Nav_Bar/Navbar";
import About from "./Components/Home/About/About";
import AboutInfo from "./Components/About Us/about info/AboutInfo";
import ClassesInfo from "./Components/Classes/Classes Info/ClassesInfo";
import BlogsInfo from "./Components/Blogs/Blogs Info/BlogsInfo";
import Footer from "./Components/Home/Footer/Footer";

function HomePg() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.txt}>
        <p> New Strength</p>
        <p>New Beginnings</p>
        <button className={styles.btn}>Join With Us</button>
        <About />
        <AboutInfo />
        <ClassesInfo />
        <BlogsInfo />
        <Footer />
      </div>
    </div>
  );
}

export default HomePg;
