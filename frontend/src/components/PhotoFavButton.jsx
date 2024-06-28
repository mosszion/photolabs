import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(prev => ! prev)
  }
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon onClick = {toggleSelected} selected = {selected}/>
       
      </div>
    </div>
  );
}

export default PhotoFavButton;