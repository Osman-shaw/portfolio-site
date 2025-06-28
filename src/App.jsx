import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from  "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Service from "./views/Service";
import Project from "./views/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import './index.css'

const App =()=> {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/Contact" element={<Contact />} />
      <Route path="/service" element={<Service/>} />
      <Route path="/project" element={<Project />} />
     </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
