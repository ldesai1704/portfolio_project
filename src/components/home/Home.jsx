import React from 'react'
import './home.css'
import {ReactTyped} from "react-typed";
const Home = () => {
  return (
<div className="home-container">
        {/* Typing Text at Top */}
      <div className="typing-text">
        <ReactTyped
          strings={["Welcome to My Portfolio!"]}
          typeSpeed={70}
          backSpeed={40}
          showCursor={false}
        />
      </div>
      <div className="home-content">
        
        {/* Left side - Text section */}
        <div className="home-text">
          <h2>Hi, I’m <span className="highlight">Labdhi Desai</span></h2>
          <h3>Front-End Developer</h3>
          <p>
           love building responsive and user-friendly
            web applications using React, HTML, CSS, and JavaScript.  
            Explore my work, skills, and creative journey below.
          </p>
          <div className="home-buttons">
            <a href="./project" className="btn primary-btn">View My Work</a>
            <a href="./Contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>

        {/* Right side - Image section */}
        <div className="home-image">
          <img src="./images/home_page.png" alt="Portfolio" />
        </div>

      </div>
    </div>
  )
}

export default Home