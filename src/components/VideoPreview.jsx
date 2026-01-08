import React from "react";

const VideoPreview = ({ videoBlob }) => {
    if (!videoBlob) return null;
    const videoURL = URL.createObjectURL(videoBlob);
  return (
    <div>
      <video src={videoURL} controls width="400" />
    </div>
  );
};

export default VideoPreview;
