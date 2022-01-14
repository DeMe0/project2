import React from "react";
import NavBar from "./NavBar";

const Header = (props) => {
  return (
    <div className="header">
      <a href="/">
        <img
          src="https://res.cloudinary.com/ademeo/image/upload/v1628130623/project2/PFOS_abbreviation.png"
          alt="logo1"
        ></img>
      </a>
      <NavBar history={props.history} />
    </div>
  );
};

export default Header;
