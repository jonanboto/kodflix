import React from 'react';
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h3>Oops. How did you get here :) Head back to the home page!</h3>
            <Link to='/'><h3>Back to homepage</h3></Link>
        </div>
    )
}