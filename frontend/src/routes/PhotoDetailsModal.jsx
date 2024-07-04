import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  console.log(props)

  

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick= {() => {props.setDisplayModal(false)}}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
        <img src={props.detail.urls.regular} />

     
      
    </div>
  )
};

export default PhotoDetailsModal;
