import WellnessLayout from '../../layout/WellnessLayout/WellnessLayout'
import boutiqueImg from '../../assets/Images/BoutiqueStayRetreatBackground.svg'
import boutiqueStayData from './BoutiqueStayRetreat.json'

function BoutiqueStayRetreat() {
  return (
    <div >
      <WellnessLayout imageUrl={boutiqueImg}
      title={boutiqueStayData.boutiqueData.title}
      content={boutiqueStayData.boutiqueData.content}/>
    </div>
  )
}

export default BoutiqueStayRetreat
