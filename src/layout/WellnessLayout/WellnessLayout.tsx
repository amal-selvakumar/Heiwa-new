import WhatWeOffer from "../../components/WhatWeOffer/WhatWeOffer";
import "./WellnessLayout.css";
import Footer from "../../components/Footer/Footer";
import whatsappIcon from '../../assets/Images/WhatsappIcon.svg'

type DataProps = {
  imageUrl: string;
  title: string;
};

type WellnessLayoutProps = {
  imageUrl: string;
  title: string;
  content: string;
  data: DataProps[];
  children: React.ReactNode;
};

function WellnessLayout({
  imageUrl,
  title,
  content,
  data,
  children
}: WellnessLayoutProps) {
  return (
    <div className="wellnessLayout">
      <div
        className="wellnessLayoutImageContainer"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="wellnessLayoutOuterContainer">
        <div className="wellnessLayoutContentContainer">
          <div className="wellnessLayoutTitle">
            <span>{title}</span>
          </div>

          <div className="wellnessLayoutContent">
            <span>{content}</span>
          </div>
        </div>

        <WhatWeOffer data={data} />
      </div>

      {children}
      
      <Footer/>

      <div className="whatsappContainer">
        <img src={whatsappIcon} alt='whatsappIcon'/>
      </div>
    </div>
  );
}

export default WellnessLayout;
