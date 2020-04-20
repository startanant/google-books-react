import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <Link className="navbar-brand" to="/">Book Quest</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" id="list">
                            <Link className="nav-link" to="/">Search</Link>
                        </li>
                        <li className="nav-item" id="saved">
                            <Link className="nav-link" to="/saved">Saved</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
        
    )
}

export default Nav;
