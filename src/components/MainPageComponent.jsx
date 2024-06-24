import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import "../components/MainPageComponent.css";
import GalleryItem from '../components/GalleryItem';
import image1 from '../components/images/image1.png';
import image2 from '../components/images/image2.jpg';
import image3 from '../components/images/image3.png';
import image4 from '../components/images/image4.jpg';
import image5 from '../components/images/image5.jpg';
import image6 from '../components/images/image6.png';
import prof1 from '../components/images/profs/prof1.jpg'
import prof2 from '../components/images/profs/prof2.png'
import prof3 from '../components/images/profs/prof3.jpg'
import prof4 from '../components/images/profs/prof4.jpg'
import prof5 from '../components/images/profs/prof5.png'
import Filter from "../components/images/filter.svg"
import Drop from "../components/images/drop.svg"


const Option = styled.div`
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
  font-weight: 600 ;
  padding: 0 16px;
`;

const MainPageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
   /* Adjust this to bring the options right below the navbar */
`;



const ImageItem = styled.div`
  width: 275px;
  height: 205px;
  border-radius: 10px;
`;


const MainPageComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
};
  const items = [
    { id: 1, image: image1, title: 'Vineyard Swines',prof: prof1, author: 'Beehaya', likes: 7, views: 480 },
    { id: 2, image: image2, title: 'Project 2',prof: prof3, author: 'Serkan Hürşgenül', likes: 1, views: 93 },
    { id: 3, image: image3, title: 'Project 3',prof: prof3, author: 'Serkan Hürşgenül', likes: 2, views: 74 },
    { id: 4, image: image4, title: 'Webflow',prof: prof4, author: 'Webflow', likes: 0, views: 0 },
    { id: 5, image: image5, title: 'Project 5',prof: prof2, author: 'MUTI', likes: 159, views: 18600 },
    { id: 6, image: image6, title: 'Project 6', prof: prof5,author: 'Jessie Maisonneuve', likes: 20, views: 1400 },
    
  ];

  return (
    <MainPageContainer>
      <div className='info-bar'>
        <button className='follow-btn'>
          <div className='f-btn' onClick={toggleDropdown}>
            Following 
            <img src={Drop} className={`icon ${isOpen ? 'rotate' : ''}`} alt="" />
          </div>
          </button>
        <div className='info-options'>
          <Option>Discover</Option>
          <Option>Animation</Option>
          <Option>Branding</Option>
          <Option>Illustration</Option>
          <Option>Mobile</Option>
          <Option>Print</Option>
          <Option>Product Design</Option>
        </div>
        <div className="filter-button">
          <img className="icon" src={Filter}></img>
          <span>Filters</span>
        </div>
      </div>
      {isOpen&&
        <div className='dropdown-cont'>
          <p>Following</p>
          <p>Popular</p>
          <p>New & Noteworthy</p>
        </div>
        }

      <div className="gallery">
        {items.map(item => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </MainPageContainer>
  );
};

export default MainPageComponent;
