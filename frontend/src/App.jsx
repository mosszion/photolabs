import React from 'react';

import './App.scss';



import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
 


const mockPhotoData = [...photos];
console.log(mockPhotoData)
const mockTopicData = [...topics];
console.log(mockTopicData)

const App = () => {
     

  // )})
  return (
    <div className="App">
 
      <HomeRoute photos= {mockPhotoData} topics= {mockTopicData}/>
      
    </div>
  );
};

export default App;
