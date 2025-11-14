import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import Project from './components/project/Project';
import About from './components/about/About';
import Contact from './components/contact/Contact';



function App() {
  return (
   <>
   
      <Header />
     
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
       <Route path="/contact" element={<Contact />} />
      </Routes>
      
      </>
   
  );
}

export default App;
