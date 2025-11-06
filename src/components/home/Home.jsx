import React from 'react'
//import './home.css'
const Home = () => {
  return (
    <div className="container">
    <div className="content">
        <div className="welcome-container">
            <h3 >Welcome to my Portfolio Website</h3>
        </div>
        <p>Explore my work, skill and creative journey</p>
        <img  className='home-image'
        src='./images/home_page.png'
        alt='Welcome Home'
        />
        <div className='intro'>
        <p>Software Engineering graduate passionate about building modern, scalable web applications using React and JavaScript.
             Always eager to learn, create, and grow.</p>
        
        <button className='read-more-btn'>Read More</button>
       </div>

    </div>
   </div>
  )
}

export default Home