
import './App.css';
import Movies from './movies/Data';
import Navigator from './general/Navigator';
import HomePage from './general/HomePage';
import Menu from './general/Menu';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink} from 'react-router-dom';
import React from 'react';
import MovieFinder from './movies/MovieFinder';

const App = () => {
  return (
   <React.Fragment>

      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviefinder" element={<MovieFinder />} />
        </Routes>
      </Router>

     </React.Fragment>
  
      
     
     
      
    

  )
}

export default App;
