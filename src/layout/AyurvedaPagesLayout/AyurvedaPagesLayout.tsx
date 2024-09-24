import AyurvedaWhatWeOffer from "../../components/AyurvedaWhatWeOffer/AyurvedaWhatWeOffer";
import Footer from "../../components/Footer/Footer";
import QuestionsDiv from "../../components/Questions/QuestionsDiv";
import "./AyurvedaPagesLayout.css";
import whatsappIcon from "../../assets/Images/WhatsappIcon.svg";

type ImageType = {
  imageUrl: string;
};

type WhatWeOfferType = {
  imageUrl: string;
  title: string;
  content: string;
  points: string;
};

type AyurvedaPagesLayoutType = {
  images: ImageType[];
  title: string;
  content: string;
  whatWeOfferData: WhatWeOfferType[];
};

function AyurvedaPagesLayout({
  images,
  title,
  content,
  whatWeOfferData,
}: AyurvedaPagesLayoutType) {
  return (
    <div className="ayurvedaPagesLayout">
      <div className="ayurvedaBackgroundImageContainer">
        {images.map((image) => (
          <img src={image.imageUrl} alt="imageUrl" />
        ))}
      </div>

      <div className="ayurvedaLayoutOuterContainer">
        <div className="wellnessLayoutTitle">
          <span>{title}</span>
        </div>

        <div className="wellnessLayoutContent">
          <span>{content}</span>
        </div>

        <AyurvedaWhatWeOffer data={whatWeOfferData} />
      </div>

      <QuestionsDiv />

      <div className="whatsappContainer">
        <img src={whatsappIcon} alt="whatsappIcon" />
      </div>

      <Footer />
    </div>
  );
}

export default AyurvedaPagesLayout;
