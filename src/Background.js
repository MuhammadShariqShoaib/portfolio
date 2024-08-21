import React from "react";
import "./BackgroundVideo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <h1 className="name-title">Muhammad Sahriq Shoaib</h1>
        <h2 className="title">Web Developer</h2>
        <div className="social-links">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="Resume.pdf" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faFilePdf} /> Resume
</a>

        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
