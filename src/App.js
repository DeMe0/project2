import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./styles.sass";
import "./styles.scss";
import "./responsive.scss";

function App(props) {
  const [album, setAlbum] = useState([]);

  const history = useHistory();
  const getAllAlbums = async () => {
    // declare our API key
    const response = await fetch(
      `https://cdn.contentful.com/spaces/lwq18859yao6/environments/master/entries?access_token=pKa2NaFQpgn-vznNjywlCZFQqeYiPsgqmYWfD7PYguI`
    );
    // parse data to json
    const data = await response.json();
    console.log("API call test", data);

    const albumArr = data.items.map((item, index) => {
      //   set the albumArr as our state
      return {
        key: item.fields.index,
        symbol: item.fields.symbol,
        title: item.fields.title,
        tracklist: item.fields.trackList,
      };
    });
    console.log(albumArr);
    setAlbum(albumArr);
  };
  // immediately invoked functional expression
  useEffect(() => {
    (async () => {
      await getAllAlbums();
    })();
  }, []);

  return (
    <div className="App">
      <Header history={history} />

      {album !== [] ? (
        <Main album={album} />
      ) : (
        <p>Select an Album from Volume1</p>
      )}
      <Footer />
    </div>
  );
}

export default App;
