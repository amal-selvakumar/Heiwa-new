
import Footer from '../../components/Footer/Footer'
import HomeContent from './components/HomeContent/HomeContent'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Review from './components/Review/Review'
import Services from './components/Services/Services'
import VirtualRetreat from './components/VirtualRetreat/VirtualRetreat'
import VisionAndMission from './components/VisionAndMission/VisionAndMission'
import WhyUs from './components/WhyUs/WhyUs'
import './Home.css'
import whatsappIcon from '../../assets/Images/WhatsappIcon.svg'


function Home() {
  return (
    <div className='home'>
    
      <HomeContent/>

      <Services/>

      <HowItWorks/>

      <VisionAndMission/>

      <WhyUs/>

      <VirtualRetreat/>

      <Review/>

      <Footer/>

      <div className='whatsappContainer'>
        <img src={whatsappIcon} alt='whatsappIcon'/>
      </div>
    </div>
  )
}

export default Home
