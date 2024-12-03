import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>The page you are looking for was not found!</p>
            <Link to="/" className="home-link">Go back to home page </Link>
        </div>
    )
}

export default NotFound