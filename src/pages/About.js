import React from "react";

const About = (props) => {
  return (
    <div className="aboutContainer">
      <img
        src="https://res.cloudinary.com/ademeo/image/upload/v1628111347/project2/UGK_ART_m6mzk2.jpg"
        alt="UGK Art"
      />
      <div className="bioContainer">
        <p className="bio">
          The tentative plan for this letter is to cover some favorite rap and
          rap-adjacent albums, singles, and music videos from the previous week.
          Since this is the first edition, I’m making it more comprehensive and
          doing a recap of August and September 2019 that focuses exclusively on
          albums. <br />
          <br />
          Hip-hop is the most popular genre in America, but the mainstream stuff
          is just a highly visible sliver of a sprawling ecosystem, sustained by
          regional subcultures, historical influences, unsung producers and
          stylistic pioneers that often get lost in translation. <br />
          <br />
          The goal of this letter is to recap some of the brilliant rap you
          might have missed, provide some context for it, and hopefully make it
          more accessible. I also need an outlet for my rap tirades because
          quadruple-texting my friends and loved ones about Saba and Smino has
          started to put a strain on my relationships.
        </p>
      </div>
    </div>
  );
};
export default About;
