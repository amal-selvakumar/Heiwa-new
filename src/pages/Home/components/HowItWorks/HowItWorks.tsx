import Button from "../../../../components/Button/Button";
import "./HowItWorks.css";
import howItWorksData from "./HowItWorks.json";
import { GrLinkNext } from "react-icons/gr";

function HowItWorks() {
  return (
    <div className="howItWorks">
      <div className="homeTitle">
        <span>HOW IT WORKS</span>
      </div>

      <div className="howItWorksContainer">
        <div className="howItWorksGridContainer">
          {howItWorksData.map((data) => (
            <div className="dataContainer">
              <div className="dataNumberContainer">
                <div className="dataNumber">
                  <span>{data.number}</span>
                </div>
              </div>

              <div className="dataDescriptionContainer">
                <div className="dataTopContainer">
                  <div className="dataImageContainer">
                    <img src={data.imageUrl} alt="imageUrl" />
                  </div>

                  <div className="dataTitleContainer">
                    <span>{data.title}</span>
                  </div>
                </div>

                <div className="dataDescription">
                  <span dangerouslySetInnerHTML={{__html:data.description}}></span>
                </div>
              </div>

              <div className="arrowContainer">
                {data.icon ? <img src={data.icon} alt="imageUrl" /> : ""}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="howItWorksButtonContainer">
        <Button variant="secondary" size="large">
          <span>BOOK YOUR SESSION NOW</span>
          <GrLinkNext />
        </Button>
      </div>
    </div>
  );
}

export default HowItWorks;
