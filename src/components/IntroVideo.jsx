import React from "react";
import ReactPlayer from "react-player";
import "../css/IntroVideo.css"; // Ensure CSS path is correct

const IntroVideo = () => {
  return (
    <div className="intro-video-container">
      <div className="video-banner">
        <h1>Discover Innovation with Us</h1>
        <p>Explore how we're transforming the industry with AI.</p>
      </div>
      <ReactPlayer
        url="introsvideo.mp4" // Specify the video URL here
        playing
        loop
        controls // Enables default video controls
        muted={true} // Controls initial mute state
        width="100%"
        height="70vh" // Adjusts the height to fit below the banner
        className="video-player"
      />
    </div>
  );
};

export default IntroVideo;
