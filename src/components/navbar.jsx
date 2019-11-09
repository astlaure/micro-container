import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Client</Link>
                </li>
                <li>
                    <Link to="/policy">Policy</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;