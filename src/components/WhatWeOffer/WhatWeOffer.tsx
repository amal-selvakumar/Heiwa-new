import { useState } from "react";
import "./WhatWeOffer.css";
import ModalComponent from "../ModalComponent/ModalComponent";
import whatWeOfferData from './WhatWeOffer.json'

type DataProps = {
  imageUrl: string;
  title: string;
};

type WhatWeOfferProps = {
  data: DataProps[];
};

function WhatWeOffer({ data }: WhatWeOfferProps) {

  const [value,setSelectedValue]=useState<string>('');

  const [showModal,setShowModal]=useState<boolean>(false);

  const handleSliderClick=(value:string)=>{
    setSelectedValue(value);
    setShowModal(true);
  }

  const handleModalClosing=(value:boolean)=>{
    setShowModal(value)
  }

  const handleModalRendering=()=>{
   
    if(!showModal){
      return null;
    }

    switch(value){
       case "CAMPING ESCAPES":
        return <ModalComponent data={whatWeOfferData.boutiqueWhatWeOffer[0]} onCloseButtonClick={handleModalClosing}/>;

      case "FOREST DWELLINGS":
        return <ModalComponent data={whatWeOfferData.boutiqueWhatWeOffer[1]} onCloseButtonClick={handleModalClosing}/>;

      case "ISLAND RETREATS":
        return <ModalComponent data={whatWeOfferData.boutiqueWhatWeOffer[2]} onCloseButtonClick={handleModalClosing}/>;

      case "CULTURAL HOMESTAYS":
        return <ModalComponent data={whatWeOfferData.boutiqueWhatWeOffer[3]} onCloseButtonClick={handleModalClosing}/>;

       case "BACKWATER RETREATS":
        return <ModalComponent data={whatWeOfferData.boutiqueWhatWeOffer[4]} onCloseButtonClick={handleModalClosing}/>;

      case "BEACHSIDE BLISS":
        return <ModalComponent data={whatWeOfferData.boutiqueWhatWeOffer[5]} onCloseButtonClick={handleModalClosing}/>;

      default:return null;
    }
  }



  return (
    <div className="whatWeOffer">
      <div className="wellnessLayoutTitle">
        <span>WHAT WE OFFER</span>
      </div>

      <div className="whatWeOfferGridOuterContainer">
        <div className="whatWeOfferGridContainer">
          {data.map((object) => (
            <div className="whatWeOfferSlider" onClick={()=>handleSliderClick(object.title)}>
              <div className="whatWeOfferSliderInnerContainer" />

              <div className="whatWeOfferSliderImageContainer">
                <img src={object.imageUrl} alt="image" />
              </div>

              <div className="whatWeOfferSliderTitleContainer">
                <span>{object.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && handleModalRendering()}
    </div>
  );
}

export default WhatWeOffer;
