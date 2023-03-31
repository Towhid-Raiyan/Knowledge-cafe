import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav >
            <div className='header'>
                <h2>Technology Update</h2>
                <div className='headerLink'>
                    <h6>Home</h6>
                    <h6>Login</h6>
                    <img src="icon.svg" alt="" srcset="" />
                </div>
            </div>
            <hr />
        </nav>
    );
};

export default Header;