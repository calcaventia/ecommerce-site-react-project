import React from "react";
import styles from "./Dashboard.module.css";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import Footer from "../components/footer";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.contentFrame}>
        <Search />
        <div className={styles.contentArea}>
          <ProductList />
        </div>
      </div>
      <div className={styles.dashboardChild} />
      <div className={styles.bagArea}>
        <Footer />
      </div>
      <NavBar />
    </div>
  );
};

export default Dashboard;
