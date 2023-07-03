import React from "react";
import styles from "./App.module.css";
import MainHome from "./Components/Home/MainHome";
import AboutUs from "./Components/About Us/AboutUs";
import Classes from "./Components/Classes/Classes";
import HomePg from "./HomePg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bolgs from "./Components/Blogs/Bolgs";

function App() {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/home" element={<MainHome />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/blogs" element={<Bolgs />} />
        </Routes>
      </BrowserRouter>
      {/* <MainHome/> */}
      {/* <AboutUs/> */}
      {/* <Classes/> */}
      {/* <Bolgs/> */}
    </div>
  );
}

export default App;
