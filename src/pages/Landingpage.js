import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/landingpage.module.css";
import Review from "../pages/homepagereview";

function Landingpage() {
  const [padding, setpadding] = useState("");
  useEffect(() => {
    setpadding(window.innerHeight);
  }, []);
  console.log(padding);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(bg.png)`,
          paddingBottom: `${padding / 3}px`,
        }}
        className={styles.background_img}
      >
        <div className={styles.upper_box}>
          <div className={styles.right_box}>
            {/* <img src="logo_img.png" alt="" className={styles.logo} /> */}
            <h1 className={styles.header_h1}>Bill Splitter</h1>
          </div>
          <div className={styles.left_box}>
            <div className={styles.login}>
              <Link to="/signup">
                 <p className={styles.text_box}>Signup</p>
              </Link>
            </div>
            <div className={styles.login}>
              <Link to="/login">
                <p className={styles.text_box}>Login</p>
              </Link>
            </div>
            <div className={styles.login}>
              <Link to="/faq">
                <p className={styles.text_box}>FAQs</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.lower_box}>
          <div className={styles.lower_left}>
            <h1 className={styles.cont_header}>Bill Splitter</h1>
            <p className={styles.cont_p}>
              <h1> Want to Split your Bills?</h1>
              {/* <br></br> */}
              Don't worry we have got you covered with the app which will do it all for you without any hassle.
            </p>
            <div className={styles.left_box}>
              <div className={styles.sigin}>
                <Link to="/login">
                  <p className={styles.text_box}>Login</p>
                </Link>
              </div>
              <div className={styles.sigin}>
                <Link to="/signup">
                  <p className={styles.text_box}>Signup</p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.lower_right}>
            <img src="cont_img.png" alt="" className={styles.cont_img} />
          </div>
        </div>
        <Review></Review>
      </div>
    </>
  );
}

export default Landingpage;
