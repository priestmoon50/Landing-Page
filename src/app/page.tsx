import Banner from "./components/Banner";
import PackageCard from "./components/PackageCard";
import DestinationInfo from "./components/DestinationInfo";
import DestinationDetails from "./components/DestinationDetails";
import Tabs from "./components/Tabs";
import LocationMap from "./components/Map";
import styles from "./Home.module.css"; // اضافه کردن استایل‌ها به صورت کلاس

export default function Home() {
  return (
    <div className={styles.container}>
      <DestinationInfo
        title="Reijnders Musy Super Green Field"
        rating={4.7}
        reviews={234}
        location="Jl. Inspeksi Cidurian, Cileunyi, Bandung, Cileunyi, Bandung"
        images={[
          { src: "/images/destination1.jpg", alt: "Destination Image 1" },
          { src: "/images/destination2.jpg", alt: "Destination Image 2" },
          { src: "/images/destination3.jpg", alt: "Destination Image 3" },
          { src: "/images/destination4.jpg", alt: "Destination Image 4" },
          { src: "/images/destination5.jpg", alt: "Destination Image 5" },
          { src: "/images/destination6.jpg", alt: "Destination Image 6" },
          { src: "/images/destination7.jpg", alt: "Destination Image 7" },
          // می‌توانید تصاویر بیشتری اضافه کنید
        ]}
      />

      <Tabs />
      <DestinationDetails pricePerNight={750} total={2250} />
      <h2 className={styles.locationTitle}>Location</h2>
      <LocationMap latitude={34.0522} longitude={-118.2437} />

      <section className={styles.packagesSection}>
        <h2 className={styles.sectionTitle}>Our Packages</h2>
        <div className={styles.packagesText}>
          <p className={styles.packageMainText}>
            Choose our range of expertly crafted packages
          </p>
          <p className={styles.packageDescription}>
            Get ready to embark on the adventure of a lifetime! Our curated list
            of top travel destinations promises breathtaking landscapes, vibrant
            cultures.
          </p>
        </div>

        <div className={styles.cardGrid}>
          <PackageCard
            title="Sun Siyam Iru Fushi, Maldives"
            location="Maldives"
            imageSrc="/images/maldives.jpg"
            tags={["Waterfall", "Nature"]}
          />
          <PackageCard
            title="Pianemo, Raja Ampat Papua"
            location="Indonesia"
            imageSrc="/images/indonesia.jpg"
            tags={["Mountain", "Adventure"]}
          />
          <PackageCard
            title="Kelingking Beach, Nusa Dua Bali"
            location="Bali"
            imageSrc="/images/bali.jpg"
            tags={["Beach", "Sea"]}
          />
        </div>
      </section>

      <Banner />
    </div>
  );
}
