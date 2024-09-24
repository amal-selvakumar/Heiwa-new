import AyurvedaPagesLayout from '../../layout/AyurvedaPagesLayout/AyurvedaPagesLayout'
import ayurvedaPersonalizedData from './AyurvedaPersonalizedTreatments.json'

function AyurvedaPersonalizedTreatment() {
  return (
    <div>
      <AyurvedaPagesLayout
       images={ayurvedaPersonalizedData.images}
       title="AYURVEDA PERSONALIZED TREATMENT"
       content={ayurvedaPersonalizedData.content}
       whatWeOfferData={ayurvedaPersonalizedData.whatWeOfferData}/>
    </div>
  )
}

export default AyurvedaPersonalizedTreatment
