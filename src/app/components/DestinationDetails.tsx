"use client";

import { FC, useState } from "react";
import styles from "./DestinationDetails.module.css";
import Pool from "@mui/icons-material/Pool";
import Nature from "@mui/icons-material/Nature";
import LocalParking from "@mui/icons-material/LocalParking";
import AcUnit from "@mui/icons-material/AcUnit";
import Wifi from "@mui/icons-material/Wifi";
import FitnessCenter from "@mui/icons-material/FitnessCenter";
import Spa from "@mui/icons-material/Spa";
import Restaurant from "@mui/icons-material/Restaurant";
import DirectionsCar from "@mui/icons-material/DirectionsCar";

type Facility = {
  icon: JSX.Element;
  label: string;
};

type DestinationDetailsProps = {
  pricePerNight: number;
  total: number;
  facilities?: ReadonlyArray<Facility>;
};

const defaultFacilities: ReadonlyArray<Facility> = [
  { icon: <Pool style={{ color: "#4db6ac" }} />, label: "Swimming Pool" },
  { icon: <Nature style={{ color: "#81c784" }} />, label: "Backyard" },
  { icon: <LocalParking style={{ color: "#ffb74d" }} />, label: "Free Parking" },
  { icon: <AcUnit style={{ color: "#64b5f6" }} />, label: "Air Conditioner" },
  { icon: <Wifi style={{ color: "#ba68c8" }} />, label: "Wifi" },
  { icon: <FitnessCenter style={{ color: "#f06292" }} />, label: "Gym" },
  { icon: <Spa style={{ color: "#a1887f" }} />, label: "Spa" },
  { icon: <Restaurant style={{ color: "#ff8a65" }} />, label: "Restaurant" },
  { icon: <DirectionsCar style={{ color: "#7986cb" }} />, label: "Car Rental" },
];

const DestinationDetails: FC<DestinationDetailsProps> = ({
  pricePerNight,
  total,
  facilities = defaultFacilities,
}) => {
  return (
    <div className={styles.container}>
      <AboutSection facilities={facilities} />
      <BookingSection pricePerNight={pricePerNight} total={total} />
    </div>
  );
};

const AboutSection: FC<{ facilities: ReadonlyArray<Facility> }> = ({ facilities }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <section className={styles.about}>
      <h2>About The Destination</h2>
      <p>
        {isExpanded
          ? "A historic American prairie-style mansion in Toorak on one of the suburb's most prestigious roads is up for sale for the first time in 70 years. While the listing agent refused to comment on who the seller was, industry sources revealed Grace Davey-Milne owns the property, who is the widow of the late vintage. Additional information and historical insights about the mansion and its significance in the local architecture..."
          : "A historic American prairie-style mansion in Toorak on one of the suburb's most prestigious roads is up for sale for the first time in 70 years. While the listing agent refused to comment on who the seller was, industry sources revealed Grace Davey-Milne owns the property, who is the widow of the late vintage..."}
      </p>
      <div
        onClick={handleToggle}
        className={styles.readMore}
        role="button"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Show less about the destination" : "Read more about the destination"}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </div>
      <h3>Our Best Facilities</h3>
      <FacilitiesSection facilities={facilities} />
    </section>
  );
};

const FacilitiesSection: FC<{ facilities: ReadonlyArray<Facility> }> = ({ facilities }) => (
  <div className={styles.facilities}>
    {facilities.map((facility, index) => (
      <div key={index} className={styles.facility}>
        {facility.icon}
        <span>{facility.label}</span>
      </div>
    ))}
  </div>
);

const BookingSection: FC<{ pricePerNight: number; total: number }> = ({
  pricePerNight,
  total,
}) => (
  <aside className={styles.booking}>
    <div className={styles.price}>
      ${pricePerNight.toFixed(2)} <span>per night</span>
    </div>
    <form className={styles.form}>
      <label>
        Check In
        <input type="date" required />
      </label>
      <label>
        Check Out
        <input type="date" required />
      </label>
      <label>
        Guest
        <select required>
          <option value="">Add Guest</option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
        </select>
      </label>
      <div className={styles.total}>Total: ${total.toFixed(2)}</div>
      <button type="submit" className={styles.bookButton} aria-label="Book Now">
        Book Now
      </button>
    </form>
    <a href="#" className={styles.askQuestion} aria-label="Ask manager a question">
      Ask manager a Question
    </a>
  </aside>
);

export default DestinationDetails;
