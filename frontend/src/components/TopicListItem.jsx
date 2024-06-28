import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = ({topic}) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      {topic.title}

    </div>
  );
};

export default TopicListItem;
