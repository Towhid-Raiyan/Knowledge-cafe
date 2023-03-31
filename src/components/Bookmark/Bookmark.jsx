import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    console.log(props.title)
    return (
        <div>
            {props.title}
        </div>
    );
};

export default Bookmark;