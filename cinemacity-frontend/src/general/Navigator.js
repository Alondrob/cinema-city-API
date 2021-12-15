import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Menu from './Menu';
import MovieFinder from '../movies/MovieFinder';
import HomePage from './HomePage';


function Navigator() {
    return (
        <Router>
            <Menu/>
                <Routes>
                    <Route path="/" element={HomePage}/>
                    <Route exact path ="/moviefinder" element={MovieFinder}/>
                </Routes>
        </Router>
    )
}

export default Navigator
