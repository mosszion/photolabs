import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  console.log(props)


  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon onClick = {() => {props.toggleSelected()}} selected = {props.selected} 
          favourite = {props.favourite}
          />
       
      </div>
    </div>
  );
}

export default PhotoFavButton;