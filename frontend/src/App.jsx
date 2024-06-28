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
  const photoInfos = new Array(3).fill(photoInfo);
  console.log(photoInfos)


  const multiPhotoInfos = photoInfos.map(photoInfo => {
    return <PhotoListItem key = "id" photoInfo={photoInfo}/>

  })
  return (
    <div className="App">
      {multiPhotoInfos}
    </div>
  );
};

export default App;
