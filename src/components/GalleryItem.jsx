import React from 'react';
import Heart from "../components/images/heart.svg";
import Views from "../components/images/views.svg";
import './GalleryItem.css';

function GalleryItem({ item, toggleLike }) {
  const { image, title, likes, liked, views, prof, author } = item;

  return (
    <div className="gallery-item">
      <img src={image} className='item-img' alt={title} />
      <div className="item-details">
        <div className='part1'>
          <div className='prof-container'>
            <img src={prof} alt={author} />
          </div>
          <p>{author}</p>
          <span className="badge-pro">PRO</span>
        </div>
        <div className='part2'>
          <div className='icon-cont' onClick={() => toggleLike(item.id)}>
            <img src={Heart} alt="Like" className={liked ? 'liked' : ''} />
          </div>
          <span className={liked ? 'liked' : ''}>{likes}</span>
          <div className='icon-cont'>
            <img src={Views} alt="Views" />
          </div>
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
