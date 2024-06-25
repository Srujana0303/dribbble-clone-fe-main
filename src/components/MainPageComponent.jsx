import React, { useState } from 'react';
import styled from 'styled-components';
import "../components/MainPageComponent.css";
import GalleryItem from '../components/GalleryItem';
import image1 from '../components/images/image1.png';
import image2 from '../components/images/image2.jpg';
import image3 from '../components/images/image3.png';
import image4 from '../components/images/image4.jpg';
import image5 from '../components/images/image5.jpg';
import image6 from '../components/images/image6.png';
import image7 from '../components/images/image7.png';
import image8 from '../components/images/image8.jpg';
import image9 from '../components/images/image9.png';
import image10 from '../components/images/image10.png';
import image11 from '../components/images/image11.png'; 
import image12 from '../components/images/image12.png'; 
import image13 from '../components/images/image13.png'; 
import image14 from '../components/images/image14.jpg'; 
import image15 from '../components/images/image15.png'; 
import image16 from '../components/images/image16.png'; 
import prof1 from '../components/images/profs/prof1.jpg';
import prof2 from '../components/images/profs/prof2.png';
import prof3 from '../components/images/profs/prof3.jpg';
import prof4 from '../components/images/profs/prof4.jpg';
import prof5 from '../components/images/profs/prof5.png';
import prof6 from '../components/images/profs/prof6.png';
import Filter from "../components/images/filter.svg";
import Drop from "../components/images/drop.svg";

const Option = styled.div`
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
  font-weight: 600;
`;

const MainPageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const MainPageComponent = ({ searchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Discover');
  const [selectedDropdownItem, setSelectedDropdownItem] = useState('');
  const [showPopular, setShowPopular] = useState(false); // State to track Popular filter

  const [items, setItems] = useState([
    { id: 1, image: image1, title: 'illustration,beehaya,sky blue, blue', prof: prof1, author: 'Beehaya', likes: 7, views: 480, category: 'Illustration', liked: false },
    { id: 2, image: image2, title: 'Serkan Hürşgenül,branding,event,black,church', prof: prof3, author: 'Serkan Hürşgenül', likes: 1, views: 93, category: 'Branding', liked: false },
    { id: 3, image: image3, title: 'Daemon Targaryen,animation,riesling,violet,blue,lavender', prof: prof2, author: 'Daemon Targaryen', likes: 2, views: 74, category: 'Animation', liked: false },
    { id: 4, image: image4, title: 'Webflow,product design,cream,beige,symbols', prof: prof4, author: 'Webflow', likes: 0, views: 0, category: 'Product Design', liked: false },
    { id: 5, image: image5, title: 'cream,beige,print,muti,symbols', prof: prof2, author: 'MUTI', likes: 159, views: 18600, category: 'Print', liked: false },
    { id: 6, image: image6, title: 'Jessie Maisonneuve,mobile,blue,pink,girl', prof: prof5, author: 'Jessie Maisonneuve', likes: 20, views: 1400, category: 'Mobile', liked: false },
    { id: 7, image: image7, title: 'Animation,klaus,violet,ghost,lavender', prof: prof1, author: 'Klaus', likes: 103, views: 7, category: 'Animation', liked: false },
    { id: 8, image: image8, title: 'Illustration,Ram,red,green,grandma', prof: prof6, author: 'Ram', likes: 1, views: 5, category: 'Illustration', liked: false },
    { id: 9, image: image9, title: 'Animation,viloet,lavender,caroline', prof: prof1, author: 'Caroline', likes: 500, views: 300,category: 'Animation', liked: false},
    { id: 10, image: image10, title: 'Branding, Srujana, violet,pink', prof: prof4, author: 'Srujana', likes: 400, views: 100,category: 'Branding', liked: false},
    { id: 11, image: image11, title: 'Branding, Kovid, white,black', prof: prof2, author: 'Kovid', likes: 250, views: 40,category: 'Branding', liked: false},
    { id: 12, image: image12, title: 'illustration,kaushik,alcohol,rum,beige,cream', prof: prof1, author: 'Kaushik', likes: 110, views: 10,category: 'Illustration', liked: false},
    { id: 13, image: image13, title: 'product design, joshika, stocks,white', prof: prof3, author: 'Joshika', likes: 110, views: 10,category: 'Product Design', liked: false},
    { id: 14, image: image14, title: 'Typography,charitha,cream,beige,cards', prof: prof5, author: 'Charitha', likes: 1, views: 0,category: 'Typography', liked: false},
    { id: 15, image: image15, title: 'Web Design, Abinesh,violet,lavender,black', prof: prof6, author: 'Abinesh', likes: 99, views: 99,category: 'Web Design', liked: false},
    { id: 16, image: image16, title: 'Web Design,black,Gayathri', prof: prof5, author: 'Gayathri', likes: 333, views: 1000,category: 'Web Design', liked: false},
  
  ]);

  const toggleDropdown = (item) => {
    if (item === selectedDropdownItem) {
      setIsOpen(!isOpen); // toggle dropdown visibility
    } else {
      setSelectedDropdownItem(item);
      setIsOpen(true); // open dropdown
    }
  };

  const filterItems = () => {
    let filteredItems = items;

    if (selectedCategory !== 'Discover') {
      filteredItems = filteredItems.filter(item => item.category === selectedCategory);
    }

    if (searchQuery) {
      filteredItems = filteredItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedDropdownItem === 'following' && showPopular) {
      filteredItems = filteredItems.filter(item => item.likes > 100);
    }

    return filteredItems;
  };

  const handlePopularClick = () => {
    setShowPopular(true); // Set showPopular to true when Popular is clicked
    console.log('Popular clicked');
  };

  const handleDiscoverClick = () => {
    setSelectedCategory('Discover'); // Reset selected category to Discover
    setShowPopular(false); // Reset showPopular to false
  };

  const toggleLike = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, likes: item.liked ? item.likes - 1 : item.likes + 1, liked: !item.liked } : item
      )
    );
  };

  return (
    <MainPageContainer>
      <div className='info-bar'>
        <button className='follow-btn'>
          <div className='f-btn' onClick={() => toggleDropdown('following')}>
            Following 
            <img src={Drop} className={`icon ${isOpen && selectedDropdownItem === 'following' ? 'rotate' : ''}`} alt="" />
          </div>
        </button>
        <div className='info-options'>
          <Option onClick={handleDiscoverClick}>Discover</Option> {/* Call handleDiscoverClick */}
          <Option onClick={() => setSelectedCategory('Animation')}>Animation</Option>
          <Option onClick={() => setSelectedCategory('Branding')}>Branding</Option>
          <Option onClick={() => setSelectedCategory('Illustration')}>Illustration</Option>
          <Option onClick={() => setSelectedCategory('Mobile')}>Mobile</Option>
          <Option onClick={() => setSelectedCategory('Print')}>Print</Option>
          <Option onClick={() => setSelectedCategory('Product Design')}>Product Design</Option>
          <Option onClick={() => setSelectedCategory('Typography')}>Typography</Option>
          <Option onClick={() => setSelectedCategory('Web Design')}>Web Design</Option>
        </div>
        <div className="filter-button">
          <img className="icon" src={Filter} alt="Filter Icon"></img>
          <span>Filters</span>
        </div>
      </div>
      {isOpen && selectedDropdownItem === 'following' &&
        <div className='dropdown-cont'>
          <button onClick={() => console.log('Following clicked')}>Following </button>
          <button onClick={handlePopularClick}>Popular </button> {/* Call handlePopularClick */}
          <button onClick={() => console.log('New & Noteworthy clicked')}>New & Noteworthy </button>
        </div>
      }

      <div className="gallery">
        {filterItems().map(item => (
          <GalleryItem key={item.id} item={item} toggleLike={toggleLike} />
        ))}
      </div>
    </MainPageContainer>
  );
};

export default MainPageComponent;
