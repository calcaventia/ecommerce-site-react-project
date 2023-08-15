import React, { useCallback } from "react";
import styles from "../pages/Dashboard.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const onButtonContainer8Click = useCallback(() => {
    // Please sync "Bag" to the project
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.title}>
        <div className={styles.itemName}>Bag</div>
      </div>
      <div className={styles.bagItems}>
        <div className={styles.row}>
          <div className={styles.bagItem}>
            <div className={styles.productImage16}>
              <img
                className={styles.imageIcon8}
                alt=""
                src="/dashboard/image8@2x.png"
              />
            </div>
          </div>
          <div className={styles.bagItem}>
            <div className={styles.productImage16}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/dashboard/image9@2x.png"
              />
            </div>
          </div>
          <div className={styles.bagItem}>
            <div className={styles.productImage16}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/dashboard/image10@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.bagItem}>
            <div className={styles.productImage16}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/dashboard/image11@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cta}>
        <Link to="/ItemView" className="product-details">
          <div className={styles.button8} onClick={onButtonContainer8Click}>
            <img className={styles.icon8} alt="" src="/dashboard/icon4.svg" />
            <div className={styles.itemName}>View Bag</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Footer;
