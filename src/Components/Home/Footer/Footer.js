import React from 'react';
import styles from './footer.module.css';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className={styles.mainFooterDiv}>
        <div className={styles.footerDiv}>
          <div className={styles.footerDiv1}>
            <Link to='/' className={styles.link} > <p className={styles.gymHeading}>GYM</p></Link>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, ex.
            </p>
            <div>
              <FacebookOutlinedIcon className={styles.icon} />
              <InstagramIcon className={styles.icon} />
              <TwitterIcon className={styles.icon} />
            </div>
          </div>
          <div className={styles.footerDiv2}>
            <p className={styles.opt}>Health Living</p>
            <p>Lorem</p>
            <p>Lorem, ipsum</p>
            <p>Lorem</p>
            <p>Lorem, ipsum</p>
          </div>
          <div className={styles.footerDiv3}>
            <p className={styles.opt}>Services</p>
            <p>lorem</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
          </div>
          <div className={styles.footerDiv4}>
            <p className={styles.opt}>Programms</p>
            <p>lorem</p>
            <p>Lorem, ipsum.</p>
            <p>lorem</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className={styles.lastLineDiv}>
          <hr />
          <p className={styles.lastLine}>@2023 Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
