import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {

  const {photoInfo} = props;
  /* Insert React */
  return (
    <>

    <img src={photoInfo.imageSource}/>
    <img src={photoInfo.profile}/>
    <p>{`${photoInfo.username}`}</p>
    <p>{`${photoInfo.location.city} ${photoInfo.location.country}`}</p>

    </> 
  )
};

export default PhotoListItem;
