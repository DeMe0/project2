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
        <p id="pageLocation">Home > Volume 1 > {filteredAlbum.symbol}</p>
        <h2>Title: {filteredAlbum.title}</h2><hr/>
        <div className="artworkContainer">
            <img 
        src={filteredAlbum.tracklist[0].frontCover}
        alt="Front Cover"
        id="frontCover"/>
        <hr/>
            <img 
        src={filteredAlbum.tracklist[0].backCover}
        alt="Back Cover"
        id="backCover" />
        </div>  
                Tracklist: 
            {filteredAlbum.tracklist[0].songs.map((item, index) => {
                return(<div className="songLines">
                    <p>{item.songTitle} {item.songDuration} {item.trackNumber}</p>
                </div>
                )
            })}
    </div>)
}

export default SelectedAlbum