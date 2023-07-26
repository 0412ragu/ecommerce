import React from 'react'
import { BrowserRouter, Routes,Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Course from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer'
import List from './components/List'
import './App.css'



function App() {
  return (
    <div>
      
    <BrowserRouter>
    <List/>
   
   <Routes>
     <Route exact path='/' element={<Home/>} />
     <Route path='/about' element={<About/>}/>
     <Route path='/course' element={<Course/>}/>
     <Route path='/contact' element={<Contact/>}/>
   </Routes>
  </BrowserRouter>    
  <Footer/>
  
 </div>
  );
}

export default App;
