import "./Services.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import serviceData from "./Services.json";
import { useState } from "react";

function Services() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerSlide = 3;
  const totalItems = serviceData.length;
  const noOfDots = totalItems - itemsPerSlide + 1;

  const handleNextClick = () => {
    if (currentIndex < serviceData.length - itemsPerSlide) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="ourServices">
      <div className="homeTitle">
        <span>OUR SERVICES</span>
      </div>

      <div className="serviceSliderContainer">
        <div className="previousButton" onClick={handlePreviousClick}>
          <div className="previousButtonDiv">
            <GrPrevious />
          </div>
        </div>

        <div className="sliderContainer">
          {serviceData.map((data) => (
            <div
              className="slider"
              style={{ transform: `translateX(-${currentIndex * 348}px)` }}
            >
              <div className="sliderInnerContainer" />

              <div className="sliderImageContainer">
                <img src={data.image} alt="image" />
              </div>

              <div className="sliderTitleContainer">
                <span>{data.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="nextButton" onClick={handleNextClick}>
          <div className="nextButtonDiv">
            <GrNext />
          </div>
        </div>
      </div>

      <div className="sliderDotsContainer">
        {[...Array(noOfDots)].map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "sliderActive" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Services;
