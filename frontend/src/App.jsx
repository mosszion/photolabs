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
  // define display modal state

  const {state, toggleFavourite, onClosePhotoDetailsModal } = useApplicationData();

  // const [displayModal, setDisplayModal] = useState(false);
  const [detail, setDetail] = useState(null)
//   const [favourites, setFavourites] = useState([]);


//   const toggleFavourite = (photoId) => {
 
    
//     if (favourites.includes(photoId)) {
//       // Photo is already in favourites, so remove it
//       setFavourites(favourites.filter(id => id !== photoId));
//     } else {
//       // Photo is not in favourites, so add it
//       setFavourites([...favourites,photoId]);
//     }
    
// };

  return (
    <div className="App">
   
 
      <HomeRoute 
          photos= {mockPhotoData} 
          topics= {mockTopicData} 
          setDisplayModal ={onClosePhotoDetailsModal}
          setDetail={setDetail}
          favourites={state.favourites}
          toggleFavourite = {toggleFavourite}
         
          />
      {state.displayModal && <PhotoDetailsModal 
          setDisplayModal={onClosePhotoDetailsModal}
          detail = {state.detail}
          favourites={state.favourites}
          toggleFavourite = {toggleFavourite}

          
           
      
      />}
    </div>
  );
};

export default App;
