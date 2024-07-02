import React, {useState} from 'react';

import '../styles/TopNavigationBar.scss'

import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false)
  const toggleFavPhotoExist= () => {
    setIsFavPhotoExist(prev => ! prev)
  }
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span> 
      <TopicList  topics= {props.topics}/>
      <span className='fav-badge'><FavBadge className='fav-badge__count' isFavPhotoExist={isFavPhotoExist} toggleFavPhotoExist ={toggleFavPhotoExist} /></span>
    </div>
  )
}

export default TopNavigation;