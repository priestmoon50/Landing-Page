"use client";

import styles from "./Banner.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";
import React from "react";

const bannerText = "Find the perfect trip for you and discover extraordinary adventures with us!";

const Banner: React.FC = () => {
  const handleExploreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Explore More clicked");
    
  };

  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.bannerTitle}>{bannerText}</h1>
        <p className={styles.bannerSubtitle}>{bannerText}</p>
        <button className={styles.exploreButton} onClick={handleExploreClick}>
          Explore More <ArrowForwardIcon className={styles.icon} />
        </button>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default Banner;
