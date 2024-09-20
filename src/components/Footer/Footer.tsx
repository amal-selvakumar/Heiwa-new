import './Footer.css'
import footerLogo from '../../assets/Images/FooterLogo.svg'
import { NavLink } from 'react-router-dom';
import footerData from './Footer.json'

function Footer() {
  return (
    <div className='footer'>
      <div className='footerLogoContainer'>
         <img src={footerLogo} alt='footer'/>
      </div>

      <div className='footerContentContainer'>
        <div className='footerTopContainer'>
            <div className='footerFirstContainer'>
              <div className='footerTitle'>
                <span>About Wellness</span>
              </div>

              <div className='footerContent'>
                <div className='footerContentDiv'>
                   <div>{'>'}</div>
                   <NavLink to=''>
                    <span>Help Center</span>
                   </NavLink>
                </div>

                <div className='footerContentDiv'>
                   <div>{'>'}</div>
                   <NavLink to=''>
                    <span>Contact Us</span>
                   </NavLink>
                </div>

                <div className='footerContentDiv'>
                   <div>{'>'}</div>
                   <NavLink to=''>
                    <span>Our Service</span>
                   </NavLink>
                </div>
              </div>
            </div>

            <div className='footerSecondContainer'>
             <div className='footerTitle'>
                <span>Mobile App</span>
              </div>

              <div className='footerContent'>
                <div className='footerContentDiv'>
                   <div>{'>'}</div>
                   <NavLink to=''>
                    <span>Android app - Consumers</span>
                   </NavLink>
                </div>
              </div>
            </div>

            <div className='footerThirdContainer'>
              <div className='footerTitle'>
                <span>Follow Us</span>
              </div>

              <div className='footerContent'>
                <div className='footerContentDiv'>
                  <div className='footerIconsDiv'>
                   {footerData.map((data)=>(
                    <div>
                      <img src={data.iconUrl} alt='iconUrl'/>
                    </div>
                   ))}
                  </div>
                </div>

                <div className='emailDiv'>
                    <span>heiwawellness@outlook.com</span>
                </div>
              </div>
            </div>
        </div>

        <div className='copyrightContainer'>
          <span>copyright@ 2024 All right reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
