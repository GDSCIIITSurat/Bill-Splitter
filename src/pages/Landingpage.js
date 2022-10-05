import React from 'react'
import { Link } from 'react-router-dom';
function Landingpage() {
    return (
        <>
            <h1>Welcome to the Bill Splitter App!</h1>
            <h4>Let's get started</h4>
            <Link to='/login'>
                click me !
            </Link>
            <Link to='/profile'>
                profile!
            </Link>
        </>
    )
}

export default Landingpage