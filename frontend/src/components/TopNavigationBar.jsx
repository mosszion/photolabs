import React, {useState} from 'react';

import '../styles/TopNavigationBar.scss';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import PhotoList from './PhotoList';

const TopNavigation = (props) => {
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList  topics= {props.topics} setTopic = {props.setTopic}/>
      <span className='fav-badge'><FavBadge
        isFavPhotoExist={props.favourites.length > 0}
      /></span>
    </div>
  );
};

export default TopNavigation;