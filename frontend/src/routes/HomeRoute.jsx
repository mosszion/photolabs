import React,{useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(prev => ! prev)
  }

  
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation  topics = {props.topics} />
    
       <PhotoList photos={props.photos} selected={selected} toggleSelected={toggleSelected}/>
    </div>
  );
};

export default HomeRoute;
