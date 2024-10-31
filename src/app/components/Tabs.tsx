"use client";


import styles from "./Tabs.module.css";
import { useState } from "react";

const tabItems = [
  "Overview",
  "Amenities",
  "Policies",
  "Location",
  "included",
  "Reviews",
  "access",
  "FAQs",
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className={styles.tabs}>
      {tabItems.map((item) => (
        <span
          key={item}
          className={`${styles.tab} ${activeTab === item ? styles.activeTab : ""}`}
          onClick={() => activeTab !== item && setActiveTab(item)}

        >
          {item}
        </span>
      ))}
    </div>
  );
}
