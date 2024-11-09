import React, { useState } from "react";
import "../css/MediaPage.css"; // Ensure the path is correct

const MediaPage = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (platform) => {
    setFilter(platform);
  };

  return (
    <div className="media-page-container">
      {/* Banner Section */}
      <div className="banner">
        <h1>Explore Our Social Media</h1>
        <p>
          Discover content from our social media platforms, including Facebook,
          Instagram, YouTube, and more.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <button
          onClick={() => handleFilterChange("all")}
          className={filter === "all" ? "active" : ""}
        >
          <i className="fas fa-globe"></i>
        </button>
        <button
          onClick={() => handleFilterChange("facebook")}
          className={filter === "facebook" ? "active" : ""}
        >
          <i className="fab fa-facebook"></i>
        </button>
        <button
          onClick={() => handleFilterChange("instagram")}
          className={filter === "instagram" ? "active" : ""}
        >
          <i className="fab fa-instagram"></i>
        </button>
        <button
          onClick={() => handleFilterChange("x")}
          className={filter === "x" ? "active" : ""}
        >
          <i className="fab fa-twitter"></i>
        </button>
        <button
          onClick={() => handleFilterChange("youtube")}
          className={filter === "youtube" ? "active" : ""}
        >
          <i className="fab fa-youtube"></i>
        </button>
        <button
          onClick={() => handleFilterChange("linkedin")}
          className={filter === "linkedin" ? "active" : ""}
        >
          <i className="fab fa-linkedin"></i>
        </button>
        <button
          onClick={() => handleFilterChange("threads")}
          className={filter === "threads" ? "active" : ""}
        >
          <i className="fab fa-facebook-messenger"></i>
        </button>
      </div>

      {/* Media Grid Section */}
      <div className="media-grid">
        {/* Facebook Content */}
        {filter === "all" || filter === "facebook" ? (
          <div className="media-tile facebook">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fnarendramodi%2Fvideos%2F1637658546820538%2F&show_text=false&width=560&t=0"
              width="500"
              height="200"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
            ></iframe>
            <h3>Sample Facebook Post</h3>
            <p>Check out this awesome update on Facebook!</p>
          </div>
        ) : null}

        {/* Instagram Content */}
        {filter === "all" || filter === "instagram" ? (
          <div className="media-tile instagram">
            <blockquote
              class="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/yourInstagramPost/"
              data-instgrm-version="12"
            >
              <a
                href="https://www.instagram.com/p/yourInstagramPost/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View this post on Instagram
              </a>
            </blockquote>
            <h3>Instagram Post</h3>
            <p>Check out this exciting moment we shared on Instagram!</p>
          </div>
        ) : null}

        {/* X (Twitter) Content */}
        {filter === "all" || filter === "x" ? (
          <div className="media-tile x">
            <blockquote class="twitter-tweet" data-lang="en">
              <p lang="en" dir="ltr">
                This is a sample tweet from X (formerly Twitter).
              </p>
              &mdash; Your Company (@yourTwitterHandle){" "}
              <a href="https://twitter.com/yourTwitterHandle/status/yourTweetID?ref_src=twsrc%5Etfw">
                October 2024
              </a>
            </blockquote>
            <h3>Sample Tweet</h3>
            <p>Here's an exciting update from X (formerly Twitter)!</p>
          </div>
        ) : null}

        {/* YouTube Content */}
        {filter === "all" || filter === "youtube" ? (
          <div className="media-tile youtube">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h3>YouTube Video</h3>
            <p>Watch this exciting video we posted on YouTube!</p>
          </div>
        ) : null}

        {/* LinkedIn Content */}
        {filter === "all" || filter === "linkedin" ? (
          <div className="media-tile linkedin">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:yourLinkedInPostID"
              frameBorder="0"
              width="100%"
              height="350px"
              allowFullScreen="true"
            />
            <h3>LinkedIn Post</h3>
            <p>See this post we shared on LinkedIn!</p>
          </div>
        ) : null}

        {/* Threads Content */}
        {filter === "all" || filter === "threads" ? (
          <div className="media-tile threads">
            <p>Threads Content Here</p>
            <h3>Threads Post</h3>
            <p>Check out our latest post on Threads!</p>
            {/* Add actual Threads embed here */}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MediaPage;
