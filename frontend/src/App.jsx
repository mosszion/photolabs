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

  return (
    <div className="App">
   
 
      <HomeRoute 
          photos= {mockPhotoData} 
          topics= {mockTopicData} 
          setDisplayModal ={setDisplayModal}
          setDetail={setDetail}
          />
      {displayModal && <PhotoDetailsModal 
          setDisplayModal={setDisplayModal}
          setDetail = {setDetail}
          
           
      
      />}
    </div>
  );
};

export default App;
