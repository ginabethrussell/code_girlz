import React from 'react';
import wizard from '../../wizard.png';
import './Header.css';

function Header () {
    return (
        <div className="header-wrapper">
            <div className="navbar-wrapper">
                <div className="logo">
                    <img src={wizard} className="App-logo" alt="logo" />
                    <h2>Coding Wizards</h2>
                </div>
                <a href="https://www.awesomeinc.org/learn">Awesome Inc U</a>
            </div>
        </div>
    );
}

export default Header;