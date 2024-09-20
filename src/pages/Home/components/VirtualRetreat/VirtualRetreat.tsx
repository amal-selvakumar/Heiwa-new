import { NavLink } from 'react-router-dom'
import Button from '../../../../components/Button/Button'
import './VirtualRetreat.css'
import retreatData from './VirtualRetreat.json'
import { GrLinkNext } from 'react-icons/gr'

function VirtualRetreat() {
  return (
    <div className='virtualRetreat'>
      <div className='virtualRetreatContainer'>
        <div className='virtualRetreatTitle'>
            <span>VIRTUAL RETREAT</span>
        </div>

        <div className='virtuaRetreatContent'>
            <span>A virtual retreat offers participants an intentionally crafted online experience aimed at rejuvenation, learning, and connection, all within the familiar setting of their own homes.</span>
        </div>

        <div className='virtualRetreatFeaturesContainer'>
          <div className='featuresTopDiv'>
          {retreatData.slice(0,4).map((data)=>(
            <div className='featureDiv'>
            <div className='featureImageDiv'>
              <img src={data.image} alt='img'/>
            </div>

            <div className='featureTitleDiv'>
              <span>{data.title}</span>
            </div>
           </div>
          ))}
             
          </div>

          <div className='featuresBottomDiv'>
          {retreatData.slice(4,6).map((data)=>(
            <div className='featureDiv'>
            <div className='featureImageDiv'>
              <img src={data.image} alt='img'/>
            </div>

            <div className='featureTitleDiv'>
              <span>{data.title}</span>
            </div>
           </div>
          ))}
          </div>
        </div>

        <div className='virtualRetreatButtonContainer'>
          <NavLink to=''>
          <Button variant='secondary' size='large'>
            <span>BOOK YOUR VIRTUAL CONSULTATION</span>
            <GrLinkNext/>
          </Button>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default VirtualRetreat
