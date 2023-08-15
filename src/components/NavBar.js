import React, { useCallback } from "react";
import styles from "../pages/Dashboard.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const onNavLinkContainerClick = useCallback(() => {
    // Handle navigation link click
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.navLinkstop}>
        <Link to="/Dashboard" className="home-page">
          <div className={styles.logo}>
            <img
              className={styles.logoChild}
              alt=""
              src="/dashboard/group-1.svg"
            />
          </div>
        </Link>
        <div className={styles.title}>
          <img className={styles.icon9} alt="" src="/dashboard/icon5.svg" />
        </div>
        <div className={styles.navLink}>
          <img className={styles.icon8} alt="" src="/dashboard/icon6.svg" />
        </div>
        <div className={styles.navLink1} onClick={onNavLinkContainerClick}>
          <img className={styles.icon8} alt="" src="/dashboard/icon7.svg" />
        </div>
      </div>
      <div className={styles.title}>
        <div className={styles.navLink2}>
          <img className={styles.icon8} alt="" src="/dashboard/icon8.svg" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
