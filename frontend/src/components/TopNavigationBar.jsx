import React from 'react';

import '../styles/TopNavigationBar.scss'
import '../styles/FavBadge.scss'
import FavBadge from './FavBadge';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span> 
      <span className='fav-badge'><span className='fav-badge__count'></span><FavBadge/></span>
    </div>
  )
}

export default TopNavigation;