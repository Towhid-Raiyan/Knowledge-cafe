import React from 'react';
import './Bookmark.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Bookmark = (props) => {
    console.log(props.title)
    return (
        <div>
            {props.title}
        </div>
    );
};

export default Bookmark;