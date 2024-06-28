import React, {useState} from 'react';

import '../styles/TopNavigationBar.scss'
import '../styles/FavBadge.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = () => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(true)
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span> 
      <TopicList />
      <span className='fav-badge'><span className='fav-badge__count'></span><FavBadge isFavPhotoExist={isFavPhotoExist}/></span>
    </div>
  )
}

export default TopNavigation;