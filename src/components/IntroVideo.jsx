import React from "react";
import ReactPlayer from "react-player";
import "../css/IntroVideo.css"; // Ensure CSS path is correct

const IntroVideo = () => {
  return (
    <div className="intro-video-container">
      <ReactPlayer
        url="introsvideo.mp4" // Specify the video URL here
        playing
        loop
        muted={true}
        width="100%"
        height="100%"
        className="video-player"
        config={{
          file: {
            attributes: {
              preload: "none", // or 'metadata' if you want to preload some data
            },
          },
        }}
      />
    </div>
  );
};

export default IntroVideo;
