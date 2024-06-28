import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {

  const {sampleDataForPhotoListItem} = props;
  /* Insert React */
  return (
    <>

    <img src={sampleDataForPhotoListItem.imageSource}/>
    <img src={sampleDataForPhotoListItem.profile}/>
    <p>{`${sampleDataForPhotoListItem.location.city} ${sampleDataForPhotoListItem.location.country}`}</p>

    </> 
  )
};

export default PhotoListItem;
