import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'


const Volume1 = (props) => {
    console.log(props.album)

    // gives me an instance of the history object
    const history = useHistory()

    const onClick = (albumSymbol) => {
        history.push(`/volume1/${albumSymbol}`)

    }

    return(
    <div className="Volume1">
        <h2>Volume1</h2>
        {props.album.map((item, index) => {
            console.log(item)

            return <div onClick={() => onClick(item.symbol)}>
                <h1>Title: {item.title}</h1>
                <img src={item.tracklist[0].frontCover} 
                            alt='cover'
                             />
                {/* Tracklist: {item.tracklist[0].songs.map((song) => {
                                         console.log(song)
                    return <div className="tracks">
                      </a>

                    </div> */}
                {/* })} */}
            </div>
    })}
        </div>)
    }

export default Volume1