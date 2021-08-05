import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Volume1 from "../pages/Volume1";
import SelectedAlbum from "../pages/SelectedAlbum";
import About from "../pages/About";
import CasetteLogo from "./CasetteLogo";

const Main = (props) => {
  console.log(props.album);

  return (
    <Switch>
      <Route exact path="/">
        <CasetteLogo />
        <Home album={props.album} />
      </Route>

      <Route
        exact
        path="/volume1"
        render={() => <Volume1 album={props.album} />}
      />

      <Route
        exact
        path="/volume1/:symbol"
        render={() => <SelectedAlbum album={props.album} />}
      />

      <Route exact path="/about" render={() => <About album={props.album} />} />
    </Switch>
  );
};

export default Main;
