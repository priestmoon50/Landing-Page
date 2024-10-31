"use client";

import styles from "./DestinationInfo.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";
import Image from 'next/image';

type Image = {
  src: string;
  alt: string;
};

type DestinationInfoProps = {
  title: string;
  rating: number;
  reviews: number;
  location: string;
  images: Image[];
};

export default function DestinationInfo({
  title,
  rating,
  reviews,
  location,
  images,
}: DestinationInfoProps) {
  const displayedImages = images.slice(0, 5); 

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.actions}>
          <button className={styles.actionButton}>
            <BookmarkBorderIcon />
          </button>
          <button className={styles.actionButton}>
            <ShareIcon />
          </button>
        </div>
      </div>

      {/* Rating and Location */}
      <div className={styles.infoSection}>
        <div className={styles.rating}>
          <StarIcon className={styles.ratingIcon} />
          <span>{rating.toFixed(1)}</span>
          <span>({reviews} Reviews)</span>
        </div>
        <div className={styles.location}>
          <LocationOnIcon className={styles.locationIcon} />
          <span>{location}</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className={styles.gallery}>
        <img
          src={displayedImages[0].src}
          alt={displayedImages[0].alt}
          className={styles.largeImage}
        />
        <div className={styles.smallImages}>
          {displayedImages.slice(1, 5).map((image, index) => (
            <div key={index} className={styles.smallImageWrapper}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.smallImage}
              />
              {index === 3 && images.length > 5 && (
                <div className={styles.overlay}>
                  +{images.length - 5}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
