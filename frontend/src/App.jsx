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

  return (
    <div className="App">
   
 
      <HomeRoute 
          photos= {mockPhotoData} 
          topics= {mockTopicData} 
          setDisplayModal ={setDisplayModal}/>
      {displayModal && <PhotoDetailsModal 
          setDisplayModal={setDisplayModal}
          photos= {mockPhotoData} 
           
      
      />}
    </div>
  );
};

export default App;
