import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";




const PhotoList = (props) => {
   


  const multiPhotoInfos =props.photos.map((photoInfo,index) => {
    return (
            <PhotoListItem key = {index} photoInfo={photoInfo} 
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
