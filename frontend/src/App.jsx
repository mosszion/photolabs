import React from 'react';

import './App.scss';


import PhotoList from 'components/PhotoList';


import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
 


const mockPhotoData = photos;
const mockTopicData = topics;

const App = () => {
     

  // )})
  return (
    <div className="App">
 
      <HomeRoute photos= {mockPhotoData} topics= {mockTopicData}/>
      
    </div>
  );
};

export default App;
