
import './App.css';
import styled from 'styled-components'
import HomePage from './components/general/HomePage'
import Menu from './components/general/Menu';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink} from 'react-router-dom';
import React from 'react';
import Data from './components/movies/Data'
import Cast from './components/movies/Cast'
import SignUp from './components/users/SignUp';



const App = () => {
  return (
   <React.Fragment>

      <Router>
        <Menu />
       
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviefinder" element={<Data />} />
          <Route path="/movie/:id/cast" element={<Cast/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </Router>

     </React.Fragment>
  
      
     
     
      
    

  )
}

export default App;
