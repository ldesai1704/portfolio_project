import React from 'react'

function Project (){
const projects =[
  {
    id: 1,
    title: "project1",
      image: "./images/project_picture.jpg",
    name: "React Project"
  },
  {
     id: 2,
    title: "project2",
      image: "./images/project_picture.jpg",
    name: "Python Project"
  },
  {
    id: 3,
    title: "project3",
    image: "./images/project_picture.jpg",
    name: "JavaScript Project"
  },
  {
     id: 4,
    title: "project4",
  image: "./images/project_picture.jpg",
      name: "React Project"
  },
  {
     id: 5,
    title: "project5",
      image: "./images/project_picture.jpg",
    name: "React Project"
  
  }
]

  return (
  <>
  <div className="project-container">
     <div className="project-header">
      <h2>My Projects</h2>
      <h2>Here are My Some Projects</h2>
     </div>
     <div className="gallary">
      <div>
        {
        projects.map(project => (
          <div key ={projects.id} className="gallary-item">
            <div className="gallary-item-wrapper">
                  <img
                  src= {project.image}
                  alt= {project.title}
                  loading='lazy network'
                  />
            </div>
            <div className="gallary-details">
              <h2>{project.name}</h2>
            </div>
          </div>
           ))} 
      
      </div>
     </div>
  </div>
  
  
  </>  
  )
}

export default Project