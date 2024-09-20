import './VisionAndMission.css'
import data from './VisionAndMission.json'

function VisionAndMission() {
  return (
    <div className='visionAndMission'>
      {data.map((data)=>(
        <div className='visionContainer' style={{backgroundImage:`url(${data.backgroundImage})`,backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
         <div className='topCommaContainer'>
            <img src={data.comma1} alt='image'/>
         </div>

         <div className='visionDescriptionContainer'>
            <span dangerouslySetInnerHTML={{__html:data.content}}></span>
         </div>

         <div className='bottomCommaContainer'>
            <img src={data.comma2} alt='image'/>
         </div>

         <div className='visionTitleContainer'>
            <span>{data.title}</span>
         </div>


        </div>
      ))}
    </div>
  )
}

export default VisionAndMission
