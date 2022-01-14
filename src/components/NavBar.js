// Implementing a dropdown menu on my mobile site using a method explained on https://www.zacwillmington.com/how-to-add-a-hamburger-menu-to-your-website/
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

// ran npm i react-hamburger-menu to install the react-hamburger-menu dependency
import HamburgerMenu from "react-hamburger-menu";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hideOrShowHamburgerDropDown: "nav",
    };
  }

  handleClick = () => {
    console.log("testing menuClicked");
    this.setState({ open: !this.state.open });
  };

  handleNavClick = (path) => {
    this.setState({ open: false });
    this.props.history.push(path);
  };

  closeNavBar = () => {
    this.setState({ open: false });
  };

  componentDidMount = () => {
    const closeNavBar = this.closeNavBar;
    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY !== 0) {
          closeNavBar();
          // this.setState({ open: false });
          console.log("scrolling");
        }
      },
      true
    );
  };

  displayHamburgerMenu = () => {
    return (
      <HamburgerMenu
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        width={18}
        height={15}
        strokeWidth={1}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.5}
      />
    );
  };

  displayNavBar = () => {
    return (
      <ul className="nav">
        <li className="nav-link">
          <button
            onClick={() => {
              this.handleNavClick("/");
            }}
          >
            Home
          </button>
          {/* <NavLink to="/">Home</NavLink> */}
        </li>
        <li className="nav-link">
          <button
            onClick={() => {
              this.handleNavClick("/volume1");
            }}
          >
            Latest Post
          </button>
        </li>
        <li className="nav-link">
          <button
            onClick={() => {
              this.handleNavClick("/about");
            }}
          >
            About
          </button>
        </li>
      </ul>
    );
  };

  displayMobileMenu = () => {
    return (
      <ul className="hamburgerDropDown">
        <li className="nav-link">
          <button
            onClick={() => {
              this.handleNavClick("/");
            }}
          >
            Home
          </button>
        </li>
        <li className="nav-link">
          <button
            onClick={() => {
              this.handleNavClick("/volume1");
            }}
          >
            Latest Post
          </button>
        </li>
        <li className="nav-link">
          <button
            onClick={() => {
              this.handleNavClick("/about");
            }}
          >
            About
          </button>
        </li>
      </ul>
    );
  };

  render() {
    console.log("testing open", this.state.open);
    console.log(this.props);
    return (
      <div className="navbar">
        {this.state.open ? this.displayMobileMenu() : null}
        {window.innerWidth > 1200
          ? this.displayNavBar()
          : this.displayHamburgerMenu()}
      </div>
    );
  }
}

export default NavBar;
