import React from "react";
import "./CasetteLogo.sass";

const CasetteLogo = (props) => {
  return (
    <div class="casette">
      <div class="screw"></div>
      <div class="screw"></div>
      <div class="screw"></div>
      <div class="screw"></div>
      <div class="tapesContainer">
        <div class="outerTape">
          <div class="tape">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div class="outerTape">
          <div class="tape">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="top">
        <img
          src="https://res.cloudinary.com/ademeo/image/upload/v1628130623/project2/PFOS_abbreviation.png"
          alt="logo"
        />
      </div>
    </div>
  );
};
export default CasetteLogo;
