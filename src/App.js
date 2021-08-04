import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Main from './components/Main';

function App() {

  const [album, setAlbum] = useState([])

  const getAllAlbums = async() => {
    // declare our API key
    const response = await fetch(`https://cdn.contentful.com/spaces/lwq18859yao6/environments/master/entries?access_token=pKa2NaFQpgn-vznNjywlCZFQqeYiPsgqmYWfD7PYguI`)
    // parse data to json
    const data = await response.json()
    console.log('API call test', data)

    const albumArr = data.items.map((item, index) => {
      //   set the albumArr as our state
        return{
            key: item.fields.index,
            symbol: item.fields.symbol,
            title: item.fields.title,
            tracklist: item.fields.trackList,
        }
    })
    console.log(albumArr)  
    setAlbum(albumArr)
    
  }
// immediately invoked functional expression
  useEffect(() => {
    (async() => {await getAllAlbums()})()
  }, [])

  return (
    <div className="App">
        <Header />
        
        {album !== [] ? <Main album={album}/> : <p>Select an Album from Volume1</p>}
        <Main album={album}/>
        <Footer />
    </div>
  );
}

export default App;
