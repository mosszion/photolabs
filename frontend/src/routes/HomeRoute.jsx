import React,{useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
      setSelected(prev => ! prev)
  }
  const [favourites, setFavourites] = useState([]);

  const photoId = props.photos.map((photo) => {
    return photo.id;
   
  }) 
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
      <TopNavigation  topics = {props.topics} />
    
       <PhotoList photos={props.photos} 
       favourites={favourites} toggleFavourite={toggleFavourite} 
       selected={selected} toggleSelected={toggleSelected}
       />
    </div>
  );
};

export default HomeRoute;
