import React, {useState} from 'react';

import '../styles/TopNavigationBar.scss'

import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span> 
      <TopicList  topics= {props.topics}/>
      <span className='fav-badge'><FavBadge className='fav-badge__count' 
      isFavPhotoExist={props.favourites.length > 0}  
      /></span>
    </div>
  )
}

export default TopNavigation;