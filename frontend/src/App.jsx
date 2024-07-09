import React,{useState} from 'react';

import './App.scss';



import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
 



const App = () => {
  
  const mockPhotoData = [...photos];
  const mockTopicData = [...topics];


  const {state, toggleFavourite, onClosePhotoDetailsModal, onOpenPhotoDetailsModal, onLoadDetail} = useApplicationData();

 

  return (
    <div className="App">
   
 
      <HomeRoute
        photos= {mockPhotoData}
        topics= {mockTopicData}
        setDisplayModal ={onOpenPhotoDetailsModal}
        setDetail={ onLoadDetail }
        favourites={state.favourites}
        toggleFavourite = {toggleFavourite}
         
      />
      {state.displayModal && <PhotoDetailsModal
        setDisplayModal={ onClosePhotoDetailsModal  }
        detail = {state.detail}
        favourites={state.favourites}
        toggleFavourite = {toggleFavourite}

          
           
      
      />}
    </div>
  );
};

export default App;
