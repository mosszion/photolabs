import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist , toggleFavPhotoExist}) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!toggleFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;