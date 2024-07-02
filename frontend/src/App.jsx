import React from 'react';

import './App.scss';



import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
 



const App = () => {
  
  const mockPhotoData = [...photos];
  const mockTopicData = [...topics];
  

  return (
    <div className="App">
   
 
      <HomeRoute photos= {mockPhotoData} topics= {mockTopicData}/>
      
    </div>
  );
};

export default App;
