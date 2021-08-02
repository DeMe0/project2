import React from 'react'
import NavBar  from './NavBar'

const Header = (props) => {
    return(
        <div className = "header">
            <img src="https://res.cloudinary.com/ademeo/image/upload/v1627925610/project2/Nav_Logo_1.png" alt="logo1"></img>
            <NavBar />
        </div>
    )
}

export default Header