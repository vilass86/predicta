import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="logo">Bit <span className="brand-name"></span></span>
            </div>
            <div className="navbar-right">
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="/pools">Pools</a></li>
                    <li className="navbar-item"><a href="/oddyssey">Oddyssey</a></li>
                    <li className="navbar-item"><a href="/dashboard">Dashboard</a></li>
                    <li className="navbar-item"><a href="/stats">Stats</a></li>
                    <li className="navbar-item"><a href="/community">Community</a></li>
                    <li className="navbar-item"><a href="/profile">Profile</a></li>
                    <li className="navbar-item"><a href="/connect-wallet" className="create-btn">Connect Wallet</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
