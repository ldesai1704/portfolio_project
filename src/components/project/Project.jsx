import React from 'react'
import './project.css'

function Project (){
const projects =[
  {
    id: 1,
    title: "project1",
      image: "./images/react.png",
    name: "React Project"
  },
  {
     id: 2,
    title: "project2",
      image: "./images/python.png",
    name: "Python Project"
  },
  {
    id: 3,
    title: "project3",
    image: "./images/javascript.png",
    name: "JavaScript Project"
  },
  {
     id: 4,
    title: "project4",
  image: "./images/react.png",
      name: "React Project"
  },
  {
     id: 5,
    title: "project5",
    image: "./images/python.png",
    name: "Python Project"
  
  },
  {
     id: 6,
    title: "project6",
    image: "./images/react.png",
    name: "React Project"
  
  },
  {
     id: 7,
    title: "project7",
    image: "./images/python.png",
    name: "Python Project"
  
  },
  {
     id: 8,
    title: "project8",
    image: "./images/javascript.png",
    name: "Javascript Project"
  
  }

  
]

  return (
  <>
  <div className="project-container">

     <div className="project-header">
      <h2>My Projects</h2>
      <p>Here are My Some Projects</p>
     </div>

     <div className="gallery">
              {
        projects.map(project => (
          <div key ={projects.id} className="gallery-item">
            
            <div className="gallery-item-wrapper">
              
                  <img
                  src= {project.image}
                  alt= {project.title}
                  loading='lazy network'
                  />
 <h2 className='item-name'>{project.name}</h2>
                  
            </div>
            
          </div>
           ))} 
      
           
     </div>
  </div>
  
  
  </>  
  )
}

export default Project