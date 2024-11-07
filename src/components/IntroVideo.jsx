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
        // controls
        muted={true}
        width="100vw"
        height="100vh" // Adjusts the height to fit below the banner
        className="video-player"
      />
    </div>
  );
};

export default IntroVideo;
