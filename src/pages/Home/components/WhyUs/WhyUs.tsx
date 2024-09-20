import "./WhyUs.css";
import whyUsData from "./WhyUs.json";

function WhyUs() {
  return (
    <div className="whyUs">
      <div className="homeTitle">
        <span>WHY US</span>
      </div>

      <div className="whyUsContentContainer">
        <div className="whyUsDescriptionContainer">
          <span>
            India, a global wellness hub, seamlessly blends authentic Ayurveda
            with serene landscapes, offering a transformative escape for those
            seeking holistic well-being.The state seamlessly integrates
            traditional practices with natural beauty, offering a unique haven
            for those seeking true wellness.
          </span>
        </div>

        <div className="whyUsIconsContainer">
          {whyUsData.map((data) => (
            <div className="whyUsIconContainer">
              <div className="iconContainer">
                <img src={data.imageUrl} alt="imageUrl" />
              </div>

              <div className="iconTitleContainer">
                <span>{data.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
