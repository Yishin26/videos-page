import React from "react";
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
      alt={video.snippet.title}
        className="ui medium rounded image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <h5 className="header">{video.snippet.title}</h5>
        
      </div>
    </div>
  );
};

export default VideoItem;
