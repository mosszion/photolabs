import React,{useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

 
  const [favourites, setFavourites] = useState([]);

  
const toggleFavourite = (photoId) => {
 
    
        if (favourites.includes(photoId)) {
          // Photo is already in favourites, so remove it
          setFavourites(favourites.filter(id => id !== photoId));
        } else {
          // Photo is not in favourites, so add it
          setFavourites([...favourites,photoId]);
        }
        
  };

  
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation  topics = {props.topics} favourites={favourites}/>
    
       <PhotoList photos={props.photos} 
       favourites={favourites} toggleFavourite={toggleFavourite} 
      //  selected={selected} toggleSelected={toggleSelected}
       />
    </div>
  );
};

export default HomeRoute;
