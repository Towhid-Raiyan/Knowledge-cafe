import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='row'>
            <div className=' d-flex justify-content-between px-5 my-3 w-100'>
                <h2 className='fw-bold '>Technology Update</h2>
                <div className='d-flex align-items-center'>
                    <h6 >Home</h6>
                    <h6 className='mx-3'>Login</h6>
                    <img className='img-fluid' src="icon.svg" alt="" srcset="" />
                </div>
            </div>
            <hr />
            
        </nav>
    );
};

export default Header;