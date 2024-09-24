import Footer from '../../components/Footer/Footer'
import QuestionsDiv from '../../components/Questions/QuestionsDiv'
import './AyurvedaRetreat.css'
import ayurvedaData from './AyurvedaRetreat.json'
import AyurvedaWhatWeOffer from './components/AyurvedaWhatWeOffer'
import whatsappIcon from "../../assets/Images/WhatsappIcon.svg";

function AyurvedaRetreat() {
  return (
    <div className='ayurvedaRetreat'>
      <div className='wellnessLayoutImageContainer'/>

      <div className='ayurvedaOuterContainer'>
        <div className='wellnessLayoutTitle'>
            <span>AYURVEDA RETREAT</span>
        </div>

        <div className='wellnessLayoutContent'>
            <span dangerouslySetInnerHTML={{__html:ayurvedaData.ayurvedaContent.content}}/>
        </div>

        <AyurvedaWhatWeOffer/>
      </div>

      <div className="whatsappContainer">
        <img src={whatsappIcon} alt="whatsappIcon" />
      </div>

      <QuestionsDiv/>

      <Footer/>

      
    </div>
  )
}

export default AyurvedaRetreat
