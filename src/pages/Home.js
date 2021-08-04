import React from 'react'

const Home = (props) => {
    return (
    <div className="home">
        <p id="pageLocation">Home</p>
        <div className="bannerContainer">
            <img src='https://res.cloudinary.com/ademeo/image/upload/v1628111347/project2/UGK_ART_m6mzk2.jpg' alt="UGK Art"/>
        </div>
        <div className="welcome">
            <h1>Welcome to Pocket Full of Stones, a weekly newsletter about (mostly) American rap music and the people who bring it into existence. </h1>
        </div>
    </div>)
}

export default Home