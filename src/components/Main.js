import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Volume1 from '../pages/Volume1'
import SelectedAlbum from '../pages/SelectedAlbum'

const Main = (props) => {
    return(
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/volume1">
            <Volume1 />
        </Route>
        <Route exact path="/selectedAlbum">
            <SelectedAlbum />
        </Route>
    </Switch>
    )
}

export default Main