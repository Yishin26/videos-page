import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="videoplay" src={videoSrc} />
      </div>
      <div style={{marginTop:'20pt'}}>
        <h1 className="header">{video.snippet.title}</h1>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
