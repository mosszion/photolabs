import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = ({photoInfo}) => {


  /* Insert React */
  return (
    <div className="photo-list__item">

    <img className="photo-list__image" src={photoInfo.imageSource}/>
    <div className="photo-list__user-details">

    <img className="photo-list__user-profile" src={photoInfo.profile}/>
    <div className="photo-list__user-info">
    <p>{photoInfo.username}</p>
    <div className="photo-list__user-location">

    <p>{photoInfo.location.city} {photoInfo.location.country}</p>
    </div>

    </div>
    </div>

    </div> 
  )
};

export default PhotoListItem;
