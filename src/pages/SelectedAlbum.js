import React from 'react'

const SelectedAlbum = (props) => {
    const loaded = () => {
        <div>
            <h1>{props.album.title}</h1>
        </div>
    }
    return(
    <div>
        {/* {props.album.map((title, index) => {
            return (
                // <h1>SelectedAlbum Page</h1>
                <h1 onClick={() => props.getAlbum(title)}>{title.title}</h1>
            );
        })}  */}
        <h1>SelectedAlbum</h1>
    </div>
    )
}

export default SelectedAlbum