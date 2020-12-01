import React from 'react';
import { Link } from 'react-router-dom';

function TestPage(props){
    return(
        <>
            <h1> test page </h1>
            <Link to="/">Go back</Link>
        </>
    )
}

export default TestPage;