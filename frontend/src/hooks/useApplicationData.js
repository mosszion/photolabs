import React,{useState} from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const useApplicationData = () => {

    //state object containing the entire state of the application
    const [state, setState] = useState (
        { 
            displayModal: false,
            detail: null,
            favourites : [],


            
        }
    )

    const toggleFavourite = (photoId) => {
 
    
        if (favourites.includes(photoId)) {
          // Photo is already in favourites, so remove it
          setState(favourites.filter(id => id !== photoId));
        } else {
          // Photo is not in favourites, so add it
          setState([...favourites,photoId]);
        }
        
    };

     const onClosePhotoDetailsModal = () => {
        setState(prevState => ({
            ...prevState,
            displayModal: true,
          }));
      
     }


    return {
        state,
        toggleFavourite : toggleFavourite,
        onClosePhotoDetailsModal,
     

    };

}


export default useApplicationData;