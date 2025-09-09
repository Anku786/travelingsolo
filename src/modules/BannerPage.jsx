import React, { useEffect, useState } from "react";
import { useStyles } from "./style";

const BannerPage = () => {
  const [bannerImages, setBannerImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:1337/api/banners?populate=*"
      );
      const data = await response.json();
      setBannerImages(data.data?.[0]?.image);
    };
    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.landingPageContainer}>
      <div className={classes.backgroundPattern} />

      <header className={classes.header}>
        <div className={classes.logo}>Musafir</div>
        <button className={classes.bookHeaderButton}>Book now</button>
      </header>

      <main className={classes.mainContent}>
        <div className={classes.heroSection}>
          <h1 className={classes.mainTitle}>Backpack Traveler</h1>
          <p className={classes.tagline}>
            "The world is a book, and those who do not travel read only one
            page." – Saint Augustine
          </p>
          <button className={classes.bookButton}>Book now</button>
        </div>

        <div className={classes.contentContainer}>
          {bannerImages.map((image, index) => (
            <div
              className={`${
                (index + 1) % 2 === 0
                  ? classes.smallBannerImage
                  : classes.largeBannerImage
              } ${classes[`bannerImage${index + 1}`]}`}
            >
              <div className={classes.cardImage}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(http://localhost:1337${image?.url}) center/cover`,
                    opacity: (index + 1) % 2 === 0 ? 0.9 : 0.8,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        {/* <div className={classes.airplane}>✈️</div>
        <div className={classes.heartEyes}>😍</div>
        <div className={classes.discoverText}>Discover</div>
        <div className={classes.goldenGateBridge} />
        
        <div className={classes.dogSection}>
          <div className={classes.dogImage}>🐕</div>
          <div className={classes.dogInfo}>
            <h4>DOG-FRIENDLY</h4>
            <p>6.7K READERS</p>
          </div>
        </div>
        
        <div className={classes.camera}>📷</div>
        <div className={classes.videoSection}>
          <FaPlay />
        </div>
        <div className={classes.indianFlag} /> */}

        <footer className={classes.footer}>
          Morbi accumsan ipsum velit. nam nec tellus a odio tincidunt auctor a
          ornare odio.
        </footer>
      </main>
    </div>
  );
};

export default BannerPage;
