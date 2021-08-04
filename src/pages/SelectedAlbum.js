import React from 'react'
// importing useParams 
import { useParams } from 'react-router'

const SelectedAlbum = (props) => {
    const params = useParams()
    console.log(params)
    console.log(props.album)

    const filteredAlbum = props.album.filter(
            (d) => d.symbol === params.symbol
        )[0];
        console.log(filteredAlbum)

    return (<div>
        <h1>SelectedAlbum component</h1>
        <h2>Title: {filteredAlbum.title}</h2><hr/>
        Tracklist: 
            {filteredAlbum.tracklist[0].songs.map((item, index) => {
                return(<div className="songLines">
                    <p>{item.songTitle}</p>
                </div>
                )
            })}
    </div>)
}

export default SelectedAlbum