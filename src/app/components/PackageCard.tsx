"use client";
import styles from "./PackageCard.module.css";

import Image from 'next/image';
type PackageCardProps = {
  title: string;
  location: string;
  imageSrc: string;
  tags: string[];
};

export default function PackageCard({ title, location, imageSrc, tags }: PackageCardProps) {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt={title} className={styles.image} layout="responsive" width={500} height={300} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.location}>{location}</p>
        <p className={styles.description}>Get ready to embark on the adventure of a lifetime!</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
