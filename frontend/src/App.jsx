import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import FavIcon from 'components/FavIcon';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
 



const App = () => {
  // const photoInfos = new Array(3).fill(photoInfo);


  // const multiPhotoInfos = photoInfos.map((photoInfo,index) => {
  //   return (
  //           <PhotoListItem key = {index} photoInfo={photoInfo} 
  //           />
           
          

  // )})
  return (
    <div className="App">
      {/* {multiPhotoInfos} */}
     <TopicList />
      <PhotoList />
      
    </div>
  );
};

export default App;
