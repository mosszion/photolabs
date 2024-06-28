import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = ({photoInfo}) => {


  /* Insert React */
  return (
    <div className="photo-list__item">

    <img src={photoInfo.imageSource}/>
    <img src={photoInfo.profile}/>
    <p>{photoInfo.username}</p>
    <p>{photoInfo.location.city} {photoInfo.location.country}</p>

    </div> 
  )
};

export default PhotoListItem;
