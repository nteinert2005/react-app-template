import React from 'react';
import { Link } from 'react-router-dom';

function Home(props){
    return(
        <>
            <h1> this is the home page display props: {props.testing} </h1>
            <Link to="/test"> Go to inner page.</Link>
        </>
    )
}

export default Home;