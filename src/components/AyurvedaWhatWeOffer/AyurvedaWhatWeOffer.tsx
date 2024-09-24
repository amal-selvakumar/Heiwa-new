import { NavLink } from 'react-router-dom';
import './AyurvedaWhatWeOffer.css'

type WhatWeOfferType={
    imageUrl:string;
    title:string;
    content:string;
    points:string;
    smallTitle?:string;
}

type AyurvedaWhatWeOfferType={
    data:WhatWeOfferType[]
}

function AyurvedaWhatWeOffer({data}:AyurvedaWhatWeOfferType) {
  return (
    <div className='ayurvedaWhatWeOffer'>
      <div className='wellnessLayoutTitle'>
        <span>WHAT WE OFFER</span>
      </div>

    <div className='ayurvedaWhatWeOfferGridOuterContainer'>
      <div className='ayurvedaWhatWeOfferGridContainer'>
        {data.map((object)=>(
            <div className='ayurvedaWhatWeOfferOuterDiv'>
                <div className='ayurvedaWhatWeOfferImageContainer'>
                    <img src={object.imageUrl} alt='image'/>
                </div>

                <div className='ayurvedaWhatWeOfferTitleContainer'>
                    <span>{object.title}</span>
                </div>

                <div className='ayurvedaWhatWeOfferContentContainer'>
                    <span>{object.content}</span>
                </div>

                {object.smallTitle ? (<div className='ayurvedaSmallTitle'>
                  <span>{object.smallTitle}</span>
                </div>):''}

                <div className='ayurvedaPointsDiv' dangerouslySetInnerHTML={{__html:object.points}}></div>

                <div className='brochureLink'>
                  <span>For more details:</span>
                  <NavLink to=''>
                    <span>Get Brochure</span>
                  </NavLink>
                </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default AyurvedaWhatWeOffer
