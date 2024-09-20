import { useState } from 'react';
import './OurServices.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function OurServices() {
    const [showDropdown,setShowDropdown] = useState<boolean>(false);

    const handleDropdownClick=()=>{
        setShowDropdown(!showDropdown);
    }
  
    return (
    <div className='ourServicesContainer' onClick={handleDropdownClick}>
      <div className='ourServicesTitleContainer'>
        <span>OUR SERVICES</span>
      </div>

      <div className='ourServicesArrowContainer'>
        {showDropdown ? <IoIosArrowUp/> : <IoIosArrowDown/>}
      </div>

      {showDropdown ? (
        <div className='dropdown'>
            <div className='dropdownDiv'>
                <NavLink to='/wellness-packages'>
                 <span>WELLNESS PACKAGES</span>
                </NavLink>
            </div>

            <div className='dropdownDiv'>
               <NavLink to=''>
                <span>BOUTIQUE STAY RETREAT</span>
               </NavLink>
            </div>

            <div className='dropdownDiv'>
               <NavLink to=''>
                <span>MEDICAL CONSULTATION</span>
               </NavLink>
            </div>

            <div className='dropdownDiv'>
               <NavLink to=''> 
                <span>HEIWA AYUR ESSENTIALS</span>
               </NavLink>
            </div>
        </div>
      ):''}
    </div>
  )
}

export default OurServices
