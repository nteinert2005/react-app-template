import React from 'react';
import { Link } from 'react-router-dom';

function TestPage(props){
    return(
        <>
            <div className="container">
                <div className="row">
                    <h1>Test Page</h1>
                    <Link to="/">Home page</Link>
                </div>
            </div>
        </>
    )
}

export default TestPage;