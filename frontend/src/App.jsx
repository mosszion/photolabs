import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import FavIcon from 'components/FavIcon';
import PhotoFavButton from 'components/PhotoFavButton';

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


  const multiPhotoInfos = photoInfos.map((photoInfo,index) => {
    return (
            <PhotoListItem key = {index} photoInfo={photoInfo} 
            />
           
          

  )})
  return (
    <div className="App">
      {multiPhotoInfos}
    </div>
  );
};

export default App;
