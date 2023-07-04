import React from "react";
import styles from "./about.module.css";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div>
      {/* About Us */}
      <div className={styles.div1}>
        <div>
          <img
            src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="gym workout"
            className={styles.img}
          />
        </div>
        <div className={styles.abtTxt}>
          <p className={styles.about}>About Us</p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a
            quis numquam officia at praesentium itaque commodi expedita
            repudiandae deleniti suscipit, illo nesciunt, eum dicta sapiente
            distinctio ea quo neque minus voluptatem amet maxime architecto
            consequuntur corporis. Illo deleniti nam autem a beatae earum aut
            labore, sunt quaerat reprehenderit facere.{" "}
          </p>
          <button className={styles.btn}>Learn More</button>
        </div>
      </div>
      <div className={styles.div1}>
        <div className={styles.div2Colomn1}>
          <p className={styles.que}>Why choose us?</p>
          <p className={styles.pnts}>1. Consultions with Exprts</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            earum eveniet, ipsa quis magnam officia corrupti nisi minima
            laboriosam similique voluptas, atque adipisci aut? Deleniti.
          </p>
          <p className={styles.pnts}>2. Best workout facilities</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            earum eveniet, ipsa quis magnam officia corrupti nisi minima
            laboriosam similique voluptas, atque adipisci aut? Deleniti.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg"
            alt="gym workout"
            className={styles.img2}
          />
        </div>
      </div>
      {/* Explore Our Fitness Studio */}
      <div className={styles.explore}>
        <div className={styles.explDiv1}>
          <p className={styles.paraHeadingExplore}>Explore Our Fitness</p>
          <p className={styles.paraHeadingExplore}> Studio</p>
          <p className={styles.paraTxt}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex enim
            quos vitae temporibus unde soluta, debitis distinctio et fugiat quo
            cupiditate odit? Quia, ex blanditiis?
          </p>
          <button className={styles.startNowBtn}>Get Start Now</button>
        </div>
        <div>
          <div className={styles.circle1}>
            <div className={styles.circle2}>
              <div className={styles.circle3}>
                <img
                  src="https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg"
                  alt="gym men"
                  className={styles.img3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Training Programs */}
      <div>
        <p className={styles.training}>Training Programs</p>
        <div className={styles.gymImgDiv}>
          <div>
            <img
              src="https://images.pexels.com/photos/700446/pexels-photo-700446.jpeg"
              alt="body building"
              className={styles.gymImg}
            />
            <a className={styles.imgHeading}>Body Building</a>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4325484/pexels-photo-4325484.jpeg"
              alt="body building"
              className={styles.gymImg}
            />
            <a className={styles.imgHeading}>Yoga</a>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/6456138/pexels-photo-6456138.jpeg"
              alt="body building"
              className={styles.gymImg}
            />
            <a className={styles.imgHeading}>Aerobic</a>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3823086/pexels-photo-3823086.jpeg"
              alt="body building"
              className={styles.gymImg}
            />
            <a className={styles.imgHeading}>Flexibility</a>
          </div>
        </div>
      </div>
      {/* Professional Trainers */}
      <div>
        <p className={styles.trainers}>Our Professional Trainers</p>
        <div className={styles.trainersDiv}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpsBGdN0GDSmj2xgP6QK06wXzIjpd-x2i8H8aCucepYwHJ9yHXhXY6Cr_tjsNKjtMw80&usqp=CAU"
            alt="trainer"
            className={styles.gymTrainerImg}
          />
          <img
            src="https://www.hituni.com/wp-content/uploads/2019/02/Jay-vincent-muscle-tech-2-1182x1600.jpg"
            alt="trainer"
            className={styles.gymTrainerImg}
          />
          <img
            src="https://s3-eu-west-1.amazonaws.com/musclefooduk/images/case-studies/lloyd-stevens/10280-lloyd-stevens-facebook.jpg"
            alt="trainer"
            className={styles.gymTrainerImg}
          />
          <img
            src="https://i.dailymail.co.uk/i/pix/2015/06/02/20/294D848700000578-3107602-image-m-12_1433272527247.jpg"
            alt="trainer"
            className={styles.gymTrainerImg}
          />
        </div>
      </div>
      {/* Our Special Packages */}
      <div>
        <p className={styles.packageHeading}>Our Special Packages</p>
        <div className={styles.lorem}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          doloribus fugiat cum, sit at, deserunt dolore ea voluptatum iste
          aspernatur, labore excepturi tempore obcaecati dicta?
        </div>
        <div className={styles.packageBoxDiv}>
          <div className={styles.packageBoxes}>
            {/* first card */}
            <p className={styles.paraHeading}>Silver</p>
            <p className={styles.symbolLine}>
              <CheckOutlinedIcon />
              Unlimited club access 24hr
            </p>
            <p className={styles.symbolLine}>
              <CheckOutlinedIcon />
              Group attendence
            </p>
            <p className={styles.symbolLine}>
              <CheckOutlinedIcon />
              Gym visits
            </p>
            <p className={styles.symbolLine}>
              <CheckOutlinedIcon />
              Visit to both complex
            </p>
            <p className={styles.symbolLine}>
              <CheckOutlinedIcon />
              Gym, fight club
            </p>
            <p className={styles.symbolLineVal}>
              $130/<span className={styles.month}>month</span>
            </p>
            <button className={styles.packageBoxBtn}>Choose</button>
          </div>
          {/* second card */}
          <div className={styles.packageBoxes}>
            <p className={styles.paraHeading}>Gold</p>
            <p className={styles.symbolLine}>
              <CheckOutlinedIcon />
              Unlimited club access 24hr
            </p>
            <p className={styles.symbolLine}>
              <CheckOutlinedIcon />
              Group attendence
            </p>
            <p className={styles.symbolLineNot}>
              <CloseOutlinedIcon />
              Gym visits
            </p>
            <p className={styles.symbolLineNot}>
              <CloseOutlinedIcon />
              Visit to both complex
            </p>
            <p className={styles.symbolLine}>
              <CheckOutlinedIcon />
              Gym, fight club
            </p>
            <p className={styles.symbolLineVal}>
              $110/<span className={styles.month}>month</span>
            </p>
            <button className={styles.packageBoxBtn}>Try 1 month</button>
          </div>
          {/* third card */}
          <div className={styles.packageBoxes}>
            <p className={styles.paraHeading}>Premium</p>
            <p className={styles.symbolLine}>
              <CheckOutlinedIcon />
              Unlimited club access 24hr
            </p>
            <p className={styles.symbolLine}>
              <CheckOutlinedIcon />
              Group attendence
            </p>
            <p className={styles.symbolLineNot}>
              <CloseOutlinedIcon />
              Gym visits
            </p>
            <p className={styles.symbolLineNot}>
              <CloseOutlinedIcon />
              Visit to both complex
            </p>
            <p className={styles.symbolLineNot}>
              <CloseOutlinedIcon />
              Gym, fight club
            </p>
            <p className={styles.symbolLineVal}>
              $80/<span className={styles.month}>month</span>
            </p>
            <button className={styles.packageBoxBtn}>Choose</button>
          </div>
        </div>
      </div>
      {/* Footer */}

      {/* <Footer /> */}
    </div>
  );
}

export default About;
