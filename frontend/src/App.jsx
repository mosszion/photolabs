import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const photoInfo = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};// Note: Rendering a single component to build components in isolation


const App = () => {
  const photoInfos = new Array(3)


  for(let i = 0 ; i < 3 ; i++){
    photoInfos[i]= []
  }
  for(let i = 0 ; i < 3 ; i++){
    photoInfos[i].push(photoInfo)
  }
  console.log("this is photo array:",photoInfos)

  const multiPhotoInfos = photoInfos.map(item => {
    

  })
  return (
    <div className="App">
      <PhotoListItem photoInfo = {photoInfo} />
    </div>
  );
};

export default App;
