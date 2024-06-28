import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [selected, setSelected] = useState(false);
  const displayAlert = () => {
    setSelected(prev => ! prev)
  }
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon onClick = {displayAlert} selected = {selected}/>
       
      </div>
    </div>
  );
}

export default PhotoFavButton;