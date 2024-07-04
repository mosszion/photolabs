import React,{useState} from 'react';

import './App.scss';



import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
 



const App = () => {
  
  const mockPhotoData = [...photos];
  const mockTopicData = [...topics];
  // define display modal state

  const [displayModal, setDisplayModal] = useState(false);
  const [detail, setDetail] = useState(null)
  const [favourites, setFavourites] = useState([]);
  const toggleFavourite = (photoId) => {
 
    
    if (favourites.includes(photoId)) {
      // Photo is already in favourites, so remove it
      setFavourites(favourites.filter(id => id !== photoId));
    } else {
      // Photo is not in favourites, so add it
      setFavourites([...favourites,photoId]);
    }
    
};

  return (
    <div className="App">
   
 
      <HomeRoute 
          photos= {mockPhotoData} 
          topics= {mockTopicData} 
          setDisplayModal ={setDisplayModal}
          setDetail={setDetail}
          favourites={favourites}
          toggleFavourite = {toggleFavourite}
         
          />
      {displayModal && <PhotoDetailsModal 
          setDisplayModal={setDisplayModal}
          detail = {detail}
          favourites={favourites}
          toggleFavourite = {toggleFavourite}

          
           
      
      />}
    </div>
  );
};

export default App;
