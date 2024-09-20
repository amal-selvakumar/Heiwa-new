import './Navbar.css';
import navbarLogo from '../../assets/Images/NavbarLogo.svg'
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import OurServices from '../../pages/Home/components/OurServices/OurServices';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbarLogoContainer'>
        <img src={navbarLogo} alt='navbarLogo'/>
      </div>

      <div className='navbarContentsContainer'>
        <NavLink to='/' className={({isActive}) => isActive ? 'active':''}>
          <span>HOME</span>
        </NavLink>

        <NavLink to='/about'>
          <span>ABOUT US</span>
        </NavLink>

        <OurServices/>
      </div>

      <div className='navbarButtonContainer'>
        <NavLink to='/contact'>
        <Button variant='primary'>
          <span>CONTACT US</span>
        </Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
