import React from 'react';
import './Bookmark.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Bookmark = (props) => {
    console.log(props.title)
    return (
        <div >
            <h3 className='bg-light p-2 m-2 fw-bolder fs-5 rounded'>
                {props.title}
            </h3> 
        </div>
    );
};

export default Bookmark;