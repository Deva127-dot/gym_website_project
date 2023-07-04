import React from "react";
import styles from "./aboutInfo.module.css";
import Footer from "../../Home/Footer/Footer";

function AboutInfo() {
  return (
    <div className={styles.main}>
      {/* Div1 */}

      <div className={styles.div1}>
        <div>
          <img
            src="https://images.pexels.com/photos/116078/pexels-photo-116078.jpeg"
            alt="gym men 1"
            className={styles.img}
          />
        </div>
        <div>
          <p className={styles.para1}>Who we are</p>
          <p className={styles.para2}>
            We will give you strength <br />
            and Health
          </p>
          <p className={styles.div1Lorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sit
            dignissimos tempore nam temporibus? Placeat, voluptate voluptatibus
            recusandae, veniam nesciunt quod delectus fugit dicta assumenda iste
            est. Ullam quidem libero ab nisi repudiandae porro beatae.
            Repellendus vel accusamus itaque atque?
          </p>
          <button className={styles.div1Btn}>Join Now</button>
        </div>
      </div>

      {/* Div2 */}

      <div className={styles.div2}>
        <div className={styles.div2Traineers}>
          <img
            src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg"
            alt="gym traineers"
            className={styles.gymTraineeImg}
          />
          <p className={styles.traineers}>50+ Traineers</p>
        </div>
        <div className={styles.div2Traineers}>
          <img
            src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg"
            alt="gym traineers"
            className={styles.gymTraineeImg}
          />
          <p className={styles.traineers}>1k+ Memberss</p>
        </div>
      </div>

      {/* Div3 */}

      <div className={styles.div3}>
        <div className={styles.div3Box1}>
          <div className={styles.div3sub_Box1}>
            <img
              src="https://as2.ftcdn.net/v2/jpg/05/33/56/83/1000_F_533568340_piTuM1OoIaIzgZMcOILaVAqvE5NkzjAV.jpg"
              alt="aim"
              className={styles.aims}
            />
            <p className={styles.ourHistory}>Our History</p>
            <p className={styles.ourHistoryLorem}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              earum, architecto accusantium, eos numquam magni veniam harum, nam
              delectus tenetur alias. Alias, ipsam saepe doloribus quibusdam
              dicta ab nobis eligendi, sequi modi perspiciatis amet, dolorem
              voluptatem dolores laborum reiciendis ex itaque sed omnis deserunt
              rerum! Eveniet praesentium in consectetur ex?
            </p>
          </div>
          <div className={styles.div3sub_Box2}>
            <img
              src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg"
              alt="gym Men"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div className={styles.div3Box2}>
          <div className={styles.div3sub_Box2}>
            <img
              src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg"
              alt="gym Men"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className={styles.div3sub_Box1}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1329/1329799.png"
              alt="aim"
              className={styles.aims}
            />
            <p className={styles.ourHistory}>Our Mission</p>
            <p className={styles.ourHistoryLorem}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              earum, architecto accusantium, eos numquam magni veniam harum, nam
              delectus tenetur alias. Alias, ipsam saepe doloribus quibusdam
              dicta ab nobis eligendi, sequi modi perspiciatis amet, dolorem
              voluptatem dolores laborum reiciendis ex itaque sed omnis deserunt
              rerum! Eveniet praesentium in consectetur ex?
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}

      {/* <Footer /> */}
    </div>
  );
}

export default AboutInfo;
