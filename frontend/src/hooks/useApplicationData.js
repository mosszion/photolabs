import React, { useState, useReducer } from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

//Initial State is here
//state object containing the entire state of the application
const initialState = {
  displayModal: false,
  detail: null,
  favourites: [],
};

//Here is the reducer function
const reducer = (state, action) => {
  switch (action.type) {
  case "FAV_PHOTO_ADDED":
    if (!state.favourites.includes(action.payload)) {
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    }
    return state;

  case "FAV_PHOTO_REMOVED":
    return {
      ...state,
      favourites: state.favourites.filter(
        (photoId) => photoId !== action.payload
      ),
    };

  case "onOpen":
    return {
      ...state,
      displayModal: true,
    };

  case "onClose":
    return {
      ...state,
      displayModal: false,
    };
  case "onLoad":
    return {
      ...state,
      detail: action.payload,
    };

  default:
    return state;
  }
};

const useApplicationData = () => {
  //useReducer called here
  const [state, dispatch] = useReducer(reducer, initialState);

  const FAV_PHOTO_ADDED = (id) => {
    dispatch({ type: "FAV_PHOTO_ADDED", payload: id });
  };
  const FAV_PHOTO_REMOVED = (id) => {
    dispatch({ type: "FAV_PHOTO_REMOVED", payload: id });
  };
  const onOpenPhotoDetailsModal = () => {
    dispatch({ type: "onOpen" });
  };
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: "onClose" });
  };
  const onLoadDetail = (photoInfo) => {
    dispatch({ type: "onLoad", payload: photoInfo });
  };
//Logic of photo add or remove combined into toggleFavorite function
  const toggleFavourite = (id) => {
    if (state.favourites.includes(id)) {
      FAV_PHOTO_REMOVED(id);
    } else {
      FAV_PHOTO_ADDED(id);
    }
  };


  //return states are here
  return {
    state: state,
    toggleFavourite: toggleFavourite,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
    onLoadDetail,
  };
};

export default useApplicationData;
