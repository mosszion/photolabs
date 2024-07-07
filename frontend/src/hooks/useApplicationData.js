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
  

    const toggleFavourite = (id) => {
        setState((prevState) => ({
          ...prevState,
          favourites: prevState.favourites.includes(id)
            ? prevState.favourites.filter((photoId) => photoId !== id)
            : [...prevState.favourites, id],
        }));
      };

    
    
    const onClosePhotoDetailsModal = () => {
        setState((prevState) => ({
          ...prevState,
          displayModal: false,
        }));
      };

      const onOpenPhotoDetailsModal = () => {
        setState((prevState) => ({
          ...prevState,
          displayModal: true,
        }));
      };
   
      const onLoadDetail = (photoInfo) =>{
        setState( (prevState) => (
         {
            ...prevState,
             detail:photoInfo
        }))

      }
      

    return {
        state,
        toggleFavourite : toggleFavourite,
        onClosePhotoDetailsModal,
        onOpenPhotoDetailsModal,
        onLoadDetail
     

    };

}


export default useApplicationData;






