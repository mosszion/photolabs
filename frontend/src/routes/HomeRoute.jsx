import React,{useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

 
  

  


  
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation  
            topics = {props.topics} 
            favourites={props.favourites} 
            setTopic = {props.setTopic}/>
    
      <PhotoList
        photos={props.photos}
        favourites={props.favourites}
        toggleFavourite={props.toggleFavourite}
        setDisplayModal = {props.setDisplayModal}
        setDetail = {props.setDetail}
        

      />
    </div>
  );
};

export default HomeRoute;
