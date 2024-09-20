import { NavLink } from "react-router-dom";
import "./WellnessPackages.css";
import wellnessData from "./WellnessPackages.json";
import QuestionsDiv from "../../components/Questions/QuestionsDiv";
import Footer from "../../components/Footer/Footer";
import whatsappIcon from '../../assets/Images/WhatsappIcon.svg'

function WellnessPackages() {
  return (
    <div className="wellnessPackages">
      <div className="wellnessOuterContainer">
      <div className="homeTitle">
        <span>OUR WELLNESS PACKAGES</span>
      </div>

      <div className="wellnessPackageContentContainer">
        <span>
          "Transform your well-being with our curated retreats, offering
          holistic experiences, expert guidance, and stunning natural settings
          for a refreshed you."
        </span>
      </div>

      <div className="wellnessGridOuterContainer">
        <div className="wellnessGridContainer">
          {wellnessData.slice(0, 15).map((data) => (
            <div className="wellnessContainer">
              <NavLink to={data.path}>
                <div className="wellnessImageContainer">
                  <img src={data.imageUrl} alt="imageUrl" />
                </div>

                <div className="wellnessTitleContainer">
                  <span>{data.content}</span>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <div className="wellnessFlexContainer">
        {wellnessData.slice(15, 17).map((data) => (
          <div className="wellnessContainer">
            <NavLink to={data.path}>
              <div className="wellnessImageContainer">
                <img src={data.imageUrl} alt="imageUrl" />
              </div>

              <div className="wellnessTitleContainer">
                <span>{data.content}</span>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      </div>

      <div className="whatsappContainer">
      <img src={whatsappIcon} alt='whatsappIcon'/>
      </div>

      <QuestionsDiv/>

      <Footer/>
    </div>
  );
}

export default WellnessPackages;
