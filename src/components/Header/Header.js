import React from 'react';
import logo from "../../images/Tasty_HUT.png";
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <button className='btn-signUp'>Sign Up</button>
        </div>
    );
};

export default Header;