import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const selected = props.favourites.includes(props.photoInfoId);

  return (
    
    <div className="photo-list__fav-icon" onClick = {
      () => {
        props.toggleFavourite(props.photoInfoId);
      }
    }>
      <div className="photo-list__fav-icon-svg">

        {/* Insert React */}
        <FavIcon
      
      
     
          selected = {selected}
        
        />
       
      </div>
    </div>
  );
}

export default PhotoFavButton;