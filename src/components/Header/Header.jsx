import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav >
            <div className='header'>
                <h2>Knowledge Cafe</h2>
                <div className='headerLink'>
                    <img src="icon.svg" alt="" srcset="" />
                </div>
            </div>
            <hr />
        </nav>
    );
};

export default Header;