import React, { useState, useReducer, useEffect } from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from 'mocks/photos';
import topics from 'mocks/topics';
//Initial State is here
//state object containing the entire state of the application
const initialState = {
  displayModal: false,
  detail: null,
  favourites: [],
  photoData:[],
  topicData:[],
  topicId: null
};

  


//Here is the reducer function
const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_PHOTO_DATA':
    return {...state, photoData: action.payload};

  case 'SET_TOPIC_DATA':
    return {...state, topicData: action.payload};
  
  case 'SET_CURRENT_TOPIC':
    return {...state, topicId: action.payload};

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
  //fetching the photo data by topic id
  useEffect(()=> {
    if (state.topicId) {
      fetch(`http://localhost:8001/api/topics/photos/${state.topicId}`)
        .then(response => response.json())
        .then(data => dispatch({type: "SET_PHOTO_DATA", payload: data }))
        .catch(error => console.error('Error fetching photos by topics:', error));

    }
  },[state.topicId]);
  //fetch the topic data here
  useEffect(()=> {
    fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then(data => dispatch({type: "SET_TOPIC_DATA", payload: data }))
      .catch(error => console.error("Error fetching topics:", error));
  },[]);
  //fetch the photo data on page load
  useEffect(()=> {
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())
      .then(data => dispatch({type: "SET_PHOTO_DATA", payload: data }))
      .catch(error => console.error("Error fetching topics:", error));
  },[]);

  
  
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

  const setTopic = (topicId) => {
    dispatch({type:"SET_CURRENT_TOPIC", payload: topicId});
  };


  //return states are here
  return {
    state: state,
    toggleFavourite: toggleFavourite,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
    onLoadDetail,
    photoData:state.photoData,
    topicData: state.topicData,
    setTopic
  };
};

export default useApplicationData;
