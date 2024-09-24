import WellnessLayout from '../../layout/WellnessLayout/WellnessLayout'
import boutiqueImg from '../../assets/Images/BoutiqueStayRetreatBackground.svg'
import boutiqueStayData from './BoutiqueStayRetreat.json'
import WhyChooseBoutiqueStays from './components/WhyChooseBoutiqueStays/WhyChooseBoutiqueStays'
import BookYourEscape from '../../components/BookYourEscape/BookYourEscape'


function BoutiqueStayRetreat() {
  return (
    <div >
      <WellnessLayout imageUrl={boutiqueImg}
      title={boutiqueStayData.boutiqueData.title}
      content={boutiqueStayData.boutiqueData.content}
      data={boutiqueStayData.boutiqueWhatWeOfferData}>
      
       <WhyChooseBoutiqueStays/>

       <BookYourEscape/>
       
      </WellnessLayout>
    </div>
  )
}

export default BoutiqueStayRetreat
