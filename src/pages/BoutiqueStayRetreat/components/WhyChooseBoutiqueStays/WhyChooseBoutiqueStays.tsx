import "./WhyChooseBoutiqueStays.css";
import whyChooseData from "./WhyChooseBoutiqueStays.json";

function WhyChooseBoutiqueStays() {
  return (
    <div className="WhyChooseBoutiqueStays">
      <div className="wellnessLayoutTitle">
        <span>WHY CHOOSE BOUTIQUE STAYS</span>
      </div>

      <div className="whyChooseBoutiqueBottomContainer">
        {whyChooseData.map((data) => (
          <div className="whyChooseDataContainer">
            <div className="whyChooseTopContainer">
              <div className="whyChooseImageContainer">
                <img src={data.imageUrl} alt="imgUrl" />
              </div>

              <div className="whyChooseTitle">
                <span>{data.title}</span>
              </div>
            </div>

            <div className="whyChooseDescriptionContainer">
              <span>{data.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseBoutiqueStays;
