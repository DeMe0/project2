import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Volume1 from '../pages/Volume1'
import SelectedAlbum from '../pages/SelectedAlbum'

const Main = (props) => {
    const [tracklist, setTracklist] = useState([])

    const [album, setAlbum] = useState({})

    const getAllAlbums = async() => {
      // declare our API key
      const response = await fetch(`https://cdn.contentful.com/spaces/lwq18859yao6/environments/master/entries?access_token=pKa2NaFQpgn-vznNjywlCZFQqeYiPsgqmYWfD7PYguI`)
      // parse data to json
      const data = await response.json()
      console.log('API call test', data)

      const albumArr = data.items.map((item, index) => {
        //   set the albumArr as our state
          return{
              title: item.fields.title,
              tracklist: item.fields.trackList,
          }
      })
      console.log(albumArr)  
      setTracklist(albumArr)
        console.log(albumArr)
      
    }
  
    useEffect(() => {getAllAlbums()}, [])
  

    return(
    <Switch>
        <Route exact path="/">
            <Home album={album}/>
        </Route>
        <Route exact path="/volume1">
            <Volume1 album={album} />
        </Route>
        <Route exact path="/selectedAlbum">
            <SelectedAlbum album={album}/>
        </Route>    </Switch>
    )
}

export default Main