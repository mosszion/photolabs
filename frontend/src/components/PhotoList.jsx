import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";




const PhotoList = (props) => {
 


  const multiPhotoInfos =props.photos.map((photoInfo) => {
    return (
            <PhotoListItem 
                  key = {photoInfo.id} 
                  photoInfo={photoInfo} 
                  favourites={props.favourites} 
                  toggleFavourite={props.toggleFavourite} 
                  setDisplayModal = {props.setDisplayModal}
                  setDetail ={props.setDetail}
       
            />
           
          

  )})
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {multiPhotoInfos}
      
    </ul>
  );
};

export default PhotoList;
