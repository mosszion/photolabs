import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {
  


  /* Insert React */
  return (
    <div className="photo-list__item">
      <PhotoFavButton selected ={props.selected} toggleSelected ={props.toggleSelected} favourites={props.favourites} toggleFavourite={props.toggleFavourite} 
       />
      

    <img className="photo-list__image" src={props.photoInfo.urls.regular}/>
    <div className="photo-list__user-details">

    <img className="photo-list__user-profile" src={props.photoInfo.user.profile}/>
    <div className="photo-list__user-info">
    <p>{props.photoInfo.user.username}</p>
    <div className="photo-list__user-location">

    <p>{props.photoInfo.location.city}, {props.photoInfo.location.country}</p>
    </div>

    </div>
    </div>

    </div> 
  )
};

export default PhotoListItem;
