
import React, { useState } from 'react'
//import './.css'
//import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
    const[isOpen, setIsOpen]= useState(false);
    const toggleMenu =()=>{
    setIsOpen(!isOpen);
}
  return (
   <>
   
   <header>
         <div className='container'>
        <nav>
        <div className='logo'>
            <h2>Labdhi Desai</h2>
        </div>
        <div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
                <li>
                    <NavLink to="/" end className="active">
                         Home
                     </NavLink>
                    
                    </li>
               <li>
                <NavLink to="/project">
                         Project
                     </NavLink>
                    </li>
                
               <li>
                <NavLink to="/about">
                         About
                     </NavLink>
                    </li>
               
               <li>
                <NavLink to="/contact">
                         Contact
                     </NavLink>
                    </li>
                
             
            </ul>
            <div className="icon" onClick={toggleMenu}>
                <GiHamburgerMenu  />
            </div>
        </div>
        </nav>
         </div>
    </header>
    <section>
        <div className="container">
            <div className="content">
                <h2></h2>
            </div>
        </div>
    </section>
      </>
  )
}

export default Header