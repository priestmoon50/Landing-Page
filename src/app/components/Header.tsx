"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import type { FC } from "react";

const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <button className={styles.menuButton} onClick={toggleDrawer}>
        <span>☰</span> Menu
      </button>

      <div className={styles.logo}>LORDSKY</div>

      <button className={styles.partnerButton}>Become a Partner</button>

      {isDrawerOpen && (
        <nav className={styles.drawer}>
          <Link href="/" onClick={toggleDrawer}>
            Home
          </Link>
          <Link href="/packages" onClick={toggleDrawer}>
            Packages
          </Link>
          <Link href="/about" onClick={toggleDrawer}>
            About
          </Link>
          <Link href="/contact" onClick={toggleDrawer}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
