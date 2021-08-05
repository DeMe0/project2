# Project Overview

## Project Links

- [github project link](https://github.com/DeMe0/project2)
- [Vercel deployment](https://project2-ne9ze0ru6-deme0.vercel.app/)

## Project Description

For this project, I plan to make a multiple-choice trivia game. I will use React's Link and Source to provide access to instructions, the game itself, and a leaderboard. The questions and possible answers will be populated using an API call. The leaderboard will be stored on a Google Sheet and also viewed through an API call.

## API

https://cdn.contentful.com/spaces/lwq18859yao6/environments/master/entries?access_token=pKa2NaFQpgn-vznNjywlCZFQqeYiPsgqmYWfD7PYguI

```
"trackList": [
          {
            "songs": [
              {
                "songTitle": "Heartless (Remix) (feat. Lil Uzi Vert)",
                "trackNumber": "1",
                "songDuration": "3:20"
              },
              {
                "songTitle": "Blinding Lights (Chromatics Remix)",
                "trackNumber": "2",
                "songDuration": "4:21"
              },
              {
                "songTitle": "Save Your Tears (OPN Remix)",
                "trackNumber": "3",
                "songDuration": "3:41"
              },
              {
                "songTitle": "Heartless (Vapor Wave Remix) (feat. Lil Uzi Vert)",
                "trackNumber": "4",
                "songDuration": "2:45"
              },
              {
                "songTitle": "After Hours (The Blaze Remix)",
                "trackNumber": "5",
                "songDuration": "3:58"
              },
              {
                "songTitle": "Scared To Live (SNL Live)",
                "trackNumber": "6",
                "songDuration": "1:08"
              }
            ],
            "backCover": "https://res.cloudinary.com/ademeo/image/upload/v1627683270/project2/after_hours_back_cover_tprqem.jpg",
            "albumTitle": "After Hours (Remixes) - EP",
            "frontCover": "https://res.cloudinary.com/ademeo/image/upload/v1627683176/project2/after_hours_front_cover_azexw1.jpg",
            "albumArtist": "The Weeknd",
            "releaseDate": "2020"
          }
        ],
        "title": "After Hours (Remixes) - EP"
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [mobile wireframes](https://res.cloudinary.com/ademeo/image/upload/v1627878328/project2/mobile_wireframe.heic)
  [desktop home wireframe](https://res.cloudinary.com/ademeo/image/upload/v1627878328/project2/desktop_home_wireframe.heic)
  [desktop latest post wireframe](https://res.cloudinary.com/ademeo/image/upload/v1627878328/project2/desktop_blog_post_wireframe.heic)
- [react architecture](https://docs.google.com/drawings/d/1wi6OstKcZ8eZvTZomTK-ukUvwUUHoLlws3hC0u0kPmo/edit?usp=sharing)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- A music blog website where the styling is inspired by spotify, but includes album reviews.

  - album data stored in contentful API

  Pages - 'Home' page, 'LatestPost' page, 'About' pages
  Components - App, Main, Header, NavBar Footer, Album cards, Tracklists

- NavBar linking to Home, Albums, and About pages

#### PostMVP

- hover effects, click effects, detailed styling, maybe styled differently for each album?

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component     |                                    Description                                    |
| ------------- | :-------------------------------------------------------------------------------: |
| App           |                           Sets up app with React Router                           |
| Header        |                       Renders the header, including the Nav                       |
| Footer        |                                Renders the footer                                 |
| Main          |                        Contains Switch/Routes for content                         |
| NavBar        |                            Renders the hamburger menu                             |
| Volume1       | Renders album artwork that can be clicked and linked to the album's separate page |
| SelectedAlbum |    Renders the correct album info once clicked, located at the right endpoint     |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Unless otherwise noted, time is listed in hours:

| Component                                               | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create React app and files for all components           |    H     |      1hr       |      1hr      |      0      |
| Mock up wireframes and react architecture               |    H     |      2hr       |      2hr      |      0      |
| Basic Navbar & Footer                                   |    H     |      1hr       |     1.5hr     |      0      |
| Set up basic React routing                              |    H     |      1hr       |     1.5hr     |      0      |
| Create Contentful CMS and organize our content properly |    H     |      2hr       |      3hr      |      0      |
| Make albums API call, parse important data              |    H     |      3hr       |      4hr      |      0      |
| Display album artwork                                   |    H     |      3hr       |      2hr      |      0      |
| Link album artwork to different pages and endpoints     |    H     |      2hr       |      3hr      |      0      |
| Use the useState hook to set state for a selected album |    H     |      2hr       |      2hr      |      0      |
| Render list of songs and info of the selected album     |    H     |      2hr       |      3hr      |      0      |
| Style home display - basic                              |    H     |      2hr       |      2hr      |      0      |
| Style individual album pages display - basic            |    H     |      2hr       |      2hr      |      0      |
| Reactive design for tablet and laptop                   |    H     |      2hr       |     .5hr      |      0      |
| Incorporate selected options into API call              |    H     |      2hr       |       2       |      0      |
| Additional styling (hover effects, etc)                 |    L     |      5hr       |      2hr      |      0      |
| Total                                                   |    H     |      29hr      |      30       |      0      |

## Additional Libraries

## Code Snippet EXAMPLE

Use this section to include a brief code snippet of functionality that you are proud of and a brief description. Code snippet should not be greater than 10 lines of code.

The below code is my SelectedAlbum component, which renders the correct album data at the correct endpoint. I had to brush up on filter(), map(), and useParams to get this to work.

```
const SelectedAlbum = (props) => {
  const params = useParams();
  console.log(params);
  console.log(props.album);

  const filteredAlbum = props.album.filter(
    (d) => d.symbol === params.symbol
  )[0];
  console.log(filteredAlbum);

  return (
    <div>
      <p id="pageLocation">Home > Volume 1 > {filteredAlbum.symbol}</p>
      <h2 className="selectedAlbumTitle">Title: {filteredAlbum.title}</h2>
      <hr />
      <div className="artworkContainer">
        <img
          src={filteredAlbum.tracklist[0].frontCover}
          alt="Front Cover"
          id="frontCover"
          className="fill"
        />
        <hr />
        <img
          src={filteredAlbum.tracklist[0].backCover}
          alt="Back Cover"
          id="backCover"
          className="fill"
        />
      </div>
      Tracklist:
      {filteredAlbum.tracklist[0].songs.map((item, index) => {
        return (
          <a href={item.youtubeLink} className="songLinks" target="_blank">
            <div className="songLines">
              <span id="trackNumber">{item.trackNumber}</span>
              <span id="songTitle">{item.songTitle}</span>
              <span id="songDuration">{item.songDuration}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SelectedAlbum;
```
