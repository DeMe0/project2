import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'


const Volume1 = (props) => {
    console.log(props.album)

    // useHistory hook gives me an instance of the history object
    // learned with 
    const history = useHistory()

    const onClick = (albumSymbol) => {
        history.push(`/volume1/${albumSymbol}`)

    }

    return(
    <div className="Volume1">
        <p id="pageLocation">Home > Volume 1</p>
        <h2>Volume1</h2>
        {props.album.map((item, index) => {
            console.log(item)

            return <div onClick={() => onClick(item.symbol)}>
                <h1>Title: {item.title}</h1>
                <img src={item.tracklist[0].frontCover} 
                            alt='cover'
                             />
            </div>
    })}
        </div>)
    }

export default Volume1