import React, { useState } from 'react';
import "../components/Navbar.css";
import Prof from "../components/images/data.jpeg";
import Drop from "../components/images/drop.svg";
import Search from "../components/images/search.svg";
import dribbbleLogo from '../components/images/dribbbleLogo.png';

const Navbar = ({ onSearch }) => {
  const [showDesignersDropdown, setShowDesignersDropdown] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);

  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className='header'>
      <div>
        <img className='header-logo' src={dribbbleLogo} title='Dribbble: the community for graphic design'/>
      </div>
      <div className='header-menu'>
        <div 
          className='p-f200-h' 
          onMouseEnter={() => setShowDesignersDropdown(true)} 
          onMouseLeave={() => setShowDesignersDropdown(false)}
        >
          Find designers <img src={Drop} className='icon1' alt="" />
          {showDesignersDropdown && (
            <div className='dropdown-menu'>
              <div className='dropdown-item'>Designer search</div>
              <div className='dropdown-item'>Post a job</div>
            </div>
          )}
        </div>
        <div className='p-f200'>Inspiration</div>
        <div 
          className='p-f200-h' 
          onMouseEnter={() => setShowCoursesDropdown(true)} 
          onMouseLeave={() => setShowCoursesDropdown(false)}
        >
          Courses <img src={Drop} className='icon1' alt="" />
          {showCoursesDropdown && (
            <div className='dropdown-menu'>
              <div className='dropdown-item'>UX Diploma</div>
              <div className='dropdown-item'>UI Certificate</div>
              <div className='dropdown-item'>Live Interactive Workshops</div>
            </div>
          )}
        </div>
        <div className='p-f200'>Jobs</div>
        <div className='p-f200'>Go pro</div>
      </div>
      <div className='header-search'>
        <div className="search-container">
          <img src={Search} className="icon" alt="Search"/>
          <input type="text" placeholder="Search..." onChange={handleSearchChange} />
        </div>
        <img className='header-prof' src={Prof} alt="Profile" />
      </div>
    </div>
  );
};

export default Navbar;
