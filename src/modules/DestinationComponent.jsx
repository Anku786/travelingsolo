import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import { destinationSets } from "../data";

const DestinationComponent = () => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [destinations, setDestinations] = useState([]);
  const [currentDestinations, setCurrentDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:1337/api/destinations?populate=*"
      );
      const data = await response.json();
      const chunkSize = 5;
      const destinationChunks = [];
      for (let i = 0; i < data.data.length; i += chunkSize) {
        destinationChunks.push(data.data.slice(i, i + chunkSize));
      }
      setDestinations(destinationChunks);
      setCurrentDestinations(destinationChunks?.[currentSlide]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentDestinations(destinations?.[currentSlide]);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinationSets.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + destinationSets.length) % destinationSets.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  console.log(currentDestinations, "asascurrentDestinations");
  return (
    <div className={classes.destinationSection}>
      <div className={classes.carouselContainer}>
        <div className={classes.destinationGrid}>
          {currentDestinations?.map((destination) => (
            <div key={destination.id} className={classes.destinationCard}>
              <div
                className={classes.cardBackground}
                style={{
                  backgroundImage: `url(http://localhost:1337${destination?.images?.[0]?.url})`,
                }}
              >
                <div className={classes.locationBadge}>
                  {destination.no_of_days} Days
                </div>
                <div className={classes.cardContent}>
                  <h3 className={classes.cityName}>{destination.name}</h3>
                  <div className={classes.separatorLine}></div>
                  <p className={classes.cityDescription}>
                    {destination.short_description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className={`${classes.carouselArrow} ${classes.carouselArrowLeft}`}
          onClick={prevSlide}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className={`${classes.carouselArrow} ${classes.carouselArrowRight}`}
          onClick={nextSlide}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        {/* <div className={classes.carouselDots}>
          {destinationSets.map((_, index) => (
            <button
              key={index}
              className={`${classes.carouselDot} ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default DestinationComponent;
