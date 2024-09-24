import "./AyurvedaWhatWeOffer.css";
import ayurvedaData from "../AyurvedaRetreat.json";
import { NavLink } from "react-router-dom";

function AyurvedaWhatWeOffer() {
  return (
    <div className="ayurvedaWhatWeOffer">
      <div className="wellnessLayoutTitle">
        <span>WHAT WE OFFER</span>
      </div>

      <div className="ayurvedaGridContainer">
        {ayurvedaData.ayurvedaWhatWeOfferContent.slice(0, 4).map((data) => (
          <NavLink to={data.path}>
            <div className="whatWeOfferSlider">
              <div className="whatWeOfferSliderInnerContainer" />

              <div className="whatWeOfferSliderImageContainer">
                <img src={data.imageUrl} alt="image" />
              </div>

              <div className="whatWeOfferSliderTitleContainer">
                <span>{data.title}</span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="ayurvedaGridOuterContainer">
        <div className="ayurvedaGridSecondContainer">
          {ayurvedaData.ayurvedaWhatWeOfferContent.slice(4, 7).map((data) => (
            <NavLink to="">
              <div className="whatWeOfferSlider">
                <div className="whatWeOfferSliderInnerContainer" />

                <div className="whatWeOfferSliderImageContainer">
                  <img src={data.imageUrl} alt="image" />
                </div>

                <div className="whatWeOfferSliderTitleContainer">
                  <span>{data.title}</span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AyurvedaWhatWeOffer;
