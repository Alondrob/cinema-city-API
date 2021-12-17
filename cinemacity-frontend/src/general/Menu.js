import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Link to="/">Home Page</Link>&nbsp;
            <Link to="/moviefinder"> Find A Movie </Link>
            
        </div>
    )
}

export default Menu
