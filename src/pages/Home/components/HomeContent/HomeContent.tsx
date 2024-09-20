import Button from "../../../../components/Button/Button";
import "./HomeContent.css";

function HomeContent() {
  return (
    <div className="homeContainer">
      <div className="homeBackgroundContainer">

        <div className="homeTitleContainer">
          <span>
            Embark on a transformative Journey to Wellness with India's top
            retreat planners, curating serene escapes and holistic experiences.
            Revitalize your body, mind, and spirit in breathtaking Indian
            landscapes.
          </span>
        </div>

        <div className="homeDescriptionContainer">
          <span>
            Discover serenity, healing, and rejuvenation amidst India’s lush
            landscapes. Our holistic wellness experiences blend ancient
            traditions with modern comfort, offering you a transformative
            journey for mind, body, and soul. From Ayurvedic therapies to yoga
            India awaits to nurture your well-being.
          </span>
        </div>

        <div className="homeButtonContainer">
          <Button variant="secondary" size="large">
            <span>BOOK NOW</span>
          </Button>
        </div>
      </div>
      </div>
  );
}

export default HomeContent;
