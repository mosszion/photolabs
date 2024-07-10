import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {
  
  const multiTopicList = props.topics.map((topic) => {
    return (
      < TopicListItem
        key = {topic.id}
        topic = {topic}
        onClick = {() => props.setTopic(topic.id)}/>
    );
  });
  

  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {multiTopicList}
    </div>
  );
};

export default TopicList;
