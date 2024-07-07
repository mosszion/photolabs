import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {




  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick= {props.setDisplayModal}>
        
        <img src={closeSymbol} alt="close symbol" />
      </button>
      

      
        <div >
        
                <div >
                  <PhotoFavButton 
                photoInfoId ={props.detail.id}
                favourites={props.favourites}
                toggleFavourite ={props.toggleFavourite}
              
                 />
                </div>

                <img className='photo-details-modal__image' src={props.detail.urls.full} />

                <div className='photo-details-modal__photographer-details' >
                    <img
                    
                      src={props.detail.user.profile}
                      alt={"user profile picture"}
                      className='photo-details-modal__photographer-profile'
                  
                    />
                    <div className="photo-details-modal__photographer-info">
                      <p>{props.detail.user.name}</p>
                      <div className="photo-details-modal__photographer-location">
                        <p>
                          {props.detail.location.city},{" "}
                          {props.detail.location.country}
                        </p>
                      </div>
                    </div>
              </div> 
        </div>

     

    

      
      
        <header className='photo-details-modal__header'>
           <h2>Similar Photos</h2>
           <div className='photo-details-modal__images'>
            <PhotoList 
            photos ={Object.values (props.detail.similar_photos) }
            favourites = {props.favourites}
            toggleFavourite ={props.toggleFavourite}
            />

           </div>

        </header>
      </div>
      

     
      
  
  )
};

export default PhotoDetailsModal;
