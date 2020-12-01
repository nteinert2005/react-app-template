import React from 'react';
import { Link } from 'react-router-dom';

function Home(props){
    return(
        <>
            <div className="container">
                <div className="row">
                    <h1>Home Page</h1>
                    <small> Props: {props.testing}</small>
                </div>
                <div className="row">
                    <Link to="/test">Inner Page Link </Link>
                </div>

            </div>
        </>
    )
}

export default Home;