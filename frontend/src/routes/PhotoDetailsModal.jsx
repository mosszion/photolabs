import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  console.log(props)
  const ph = props.photos.map((photo) => {
    return <div key = {photo.id} >
             <img src={photo.urls.regular}/>
             </div>
  })
  console.log(ph)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick= {() => {props.setDisplayModal(false)}}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {ph}
     
      
    </div>
  )
};

export default PhotoDetailsModal;
