import WhatWeOffer from '../../components/WhatWeOffer/WhatWeOffer';
import './WellnessLayout.css'

type WellnessLayoutProps={
    imageUrl:string;
    title:string;
    content:string;
}

function WellnessLayout({imageUrl,title,content}:WellnessLayoutProps) {
  return (
    <div className='wellnessLayout'>
      <div className='wellnessLayoutImageContainer' style={{backgroundImage:`url(${imageUrl})`}}/>

    <div className='wellnessLayoutOuterContainer'>
      <div className='wellnessLayoutContentContainer'>
        <div className='wellnessLayoutTitle'>
            <span>{title}</span>
        </div>

        <div className='wellnessLayoutContent'>
            <span>{content}</span>
        </div>
      </div>

      <WhatWeOffer/>
      </div>

    </div>
  )
}

export default WellnessLayout
