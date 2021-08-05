import React from "react";

const Home = (props) => {
  return (
    <div className="home">
      <p id="pageLocation">Home</p>
      <div className="bannerContainer">
        <img
          src="https://res.cloudinary.com/ademeo/image/upload/v1628111347/project2/UGK_ART_m6mzk2.jpg"
          alt="UGK Art"
        />
      </div>
      <div className="welcome">
        <h2 id="welcomeMessage">
          Welcome to Pocket Full of Stones, a weekly newsletter about (mostly)
          American rap music and the people who bring it into existence.
        </h2>
      </div>
      <div className="volume1Description">
        <h3>
          In Volume 1, we will be taking a look at Vince Stapes'
          <i>Vince Staples</i>, Isaiah Rashad's <i>The House Is Burning</i>,
          Denzel Curry & Kenny Beats' <i>UNLOCKED</i> & The Weeknd's{" "}
          <i>After Hours Remixes EP</i>.
        </h3>
        <button href="/volume1">
          <a href="/volume1">Click here to check it out!</a>
        </button>
      </div>
      <div className="vol1Collage">
        <a href="/volume1">
          <img
            src="https://res.cloudinary.com/ademeo/image/upload/v1628174808/project2/volume1-collage.jpg"
            alt="volume1-collage"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
