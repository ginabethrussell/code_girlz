import React from 'react';
import developerLogo from '../../developer.svg';
import './Header.css';

function Header () {
    return (
        <div className="header-wrapper">
            <div className="navbar-wrapper">
                <div className="logo">
                    <img src={developerLogo} className="App-logo" alt="girl-developer-logo" />
                    <h2>Code Girlz</h2>
                </div>
                <h2>Creating Cool Things with Code!</h2>
            </div>
        </div>
    );
}

export default Header;