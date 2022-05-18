import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../logo.jpg';
import "../App.css";

function Navbar() {
    return (
        <div className="Navbar"> 
            <div className="leftSide"> 
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>

            <div className="center">
                <div className="links">
                    <a href="/home">Home</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/contactUs">Contact Us</a>
                    <a href="/aboutUs">About Us</a>
                </div>
            </div>

            <div className="rightSide">
                <input type="text" placeholder="Search..." />
                <button>
                    <SearchIcon style={{ color: 'white' }} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;