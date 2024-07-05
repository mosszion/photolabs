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
    console.log("state faourite first:", state.favourites)

    // const toggleFavourite = (photoId) => {
 
    
    //     if (state.favourites.includes(photoId)) {
    //       // Photo is already in favourites, so remove it
    //       setState(state.favourites.filter(id => id !== photoId));
    //     } else {
    //       // Photo is not in favourites, so add it
    //       console.log("second state favourites",[...state.favourites])
    //       setState([...state.favourites,photoId]);
    //     }
        
    // };
    const toggleFavourite = (id) => {
        setState((prevState) => ({
          ...prevState,
          favourites: prevState.favourites.includes(id)
            ? prevState.favourites.filter((photoId) => photoId !== id)
            : [...prevState.favourites, id],
        }));
      };

    //  const onClosePhotoDetailsModal = () => {
    //     setState(prevState => ({
    //         ...prevState,
    //         displayModal: false,
    //       }));
      
    //  }
    console.log("mosi displayModal", state.displayModal)
    const dis = {...state.displayModal}
    const onClosePhotoDetailsModal = () => {
        setState((prevState) => ({
          ...prevState,
          dis: false,
        }));
      };

      const onOpenPhotoDetailsModal = () => {
        setState((prevState) => ({
          ...prevState,
          dis: true,
        }));
      };
      console.log(state.displayModal)

    return {
        state,
        toggleFavourite : toggleFavourite,
        onClosePhotoDetailsModal,
        onOpenPhotoDetailsModal
     

    };

}


export default useApplicationData;