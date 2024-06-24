import React from 'react';
import Heart from "../components/images/heart.svg";
import Views from "../components/images/views.svg"
import './GalleryItem.css';

function GalleryItem({ item }) {
  return (
    <div className="gallery-item">
      <img src={item.image} className='item-img' alt={item.title} />
      <div className="item-details">
        <div className='part1'>
          <div className='prof-container'>
            <img src={item.prof}/>
          </div>
          <p>{item.author}</p>
          <span class="badge-pro">PRO</span>
        </div>
        <div className='part2'>
            <div className='icon-cont'>
              <img src={Heart} alt="" />
            </div>
            {item.likes}
            <div className='icon-cont'>
              <img src={Views} alt="" /> 
            </div>
            {item.views}
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
