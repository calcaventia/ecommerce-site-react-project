import React from "react";
import styles from "../pages/Dashboard.module.css";

function Search() {
  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.input}>
          <div className={styles.label}>
            <div className={styles.label1}>Search Item</div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.inputArea}>
              <div className={styles.placeholder}>
                Apple Watch, Samsung S21, Macbook Pro, ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
