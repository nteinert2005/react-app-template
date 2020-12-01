import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function TestPage(props){
    return(
        <>
            <Navbar />
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