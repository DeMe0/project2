import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Volume1 from '../pages/Volume1'
import SelectedAlbum from '../pages/SelectedAlbum'

const Main = (props) => {
    // const [tracklist, setTracklist] = useState([])
    console.log(props.album)



    return(
    <Switch>
        <Route exact path="/">
            <Home album={props.album}/>
        </Route>

        <Route exact path="/volume1"
            render={() => <Volume1 album={props.album}   />} />
        
        <Route exact path="/selectedAlbum/">
            <SelectedAlbum album={props.album}/>
        </Route>
        
        <Route exact path="/volume1/:symbol"
        render={() => <SelectedAlbum album={props.album}  />} />
        </Switch>
    )
}

export default Main