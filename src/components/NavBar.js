// Implementing a dropdown menu on my mobile site using a method explained on https://www.zacwillmington.com/how-to-add-a-hamburger-menu-to-your-website/
// Writing my own hamburger menu was a struggle during the portfolio project, so this was extremely helpful
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

// ran npm i react-hamburger-menu to install the react-hamburger-menu dependency
import HamburgerMenu from 'react-hamburger-menu';

class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            hideOrShowHambugerDropDown: 'nav'
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }

    displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}
                />
        )
    }

    displayNavBar = () => {
        return (
            <ul className='nav'>
                    <li className='nav-link'><NavLink to='/' >Home</NavLink></li>
                    <li className='nav-link'><NavLink to='/volume1'>Latest Post</NavLink></li>
                    <li className='nav-link'><NavLink to='/about'>About</NavLink></li>
                </ul>
        )
    }

    displayMobileMenu = () => {
        return (
            <ul className='hamburgerDropDown'>
                    <li className='nav-link'><NavLink to='/' >Home</NavLink></li>
                    <li className='nav-link'><NavLink to='/volume1'>Latest Post</NavLink></li>
                    <li className='nav-link'><NavLink to='/about'>About</NavLink></li>
                </ul>
        )
    }

    render() {
        return (
            <div className='navbar'>
                { this.state.open ?  this.displayMobileMenu() : null}
                {window.innerWidth > 1200 ? this.displayNavBar() : this.displayHamburgerMenu()}
            </div>
        );
    }
}

export default NavBar;

