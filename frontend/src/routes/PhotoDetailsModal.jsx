import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  console.log(props)

  

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick= {() => {props.setDisplayModal(false)}}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <img className='photo-details-modal__image' src={props.detail.urls.full} />
        <div className='photo-details-modal__header'>
        <img
        
          src={props.detail.user.profile}
        />
        <div className="photo-list__user-info">
          <p>{props.detail.user.name}</p>
          <div className="photo-list__user-location">
            <p>
              {props.detail.location.city},{" "}
              {props.detail.location.country}
            </p>
          </div>
        </div>
      </div>

      </div>
      <div>
        <PhotoList similar ={props.detail.similar_photos}/>
      </div>
      

     
      
    </div>
  )
};

export default PhotoDetailsModal;
