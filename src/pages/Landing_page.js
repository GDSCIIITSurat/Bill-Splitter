import React from 'react'
import { Link } from 'react-router-dom';
function Landing_page() {
    return (
        <>
            <h3>Welcome to the Bill Splitter App!</h3>
            <h4>Let's get started</h4>
            <Link to='/login'>
                click me !
            </Link>
        </>
    )
}

export default Landing_page