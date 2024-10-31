"use client";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Twitter, Instagram, YouTube, Pinterest } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>LORDSKY</div>

        <div className={styles.centerSection}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className={styles.icon} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className={styles.icon} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <YouTube className={styles.icon} />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <Pinterest className={styles.icon} />
          </a>
        </div>

        <div className={styles.rightSection}>
          <Link href="/templates">Templates</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/features">Features</Link>
          <Link href="/about">About Us</Link>
        </div>
      </div>
    </footer>
  );
}
