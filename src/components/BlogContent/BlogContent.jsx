import React from 'react';
import './BlogContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogContent = (props) => {
    const { id, authorName, blogTitle, writtenDate, readTime, coverPicture, authorPicture } = props.blogContent;
    const handleReadTime = props.handleReadTime;
    const handleBookmark = props.handleBookmark;
    return (
        <div className='blog-content'>
            <img className='coverPicture' src={coverPicture} alt="" srcset="" />
            <div className='readTime'>
                <div>
                    <div className='author'>
                        <img src={authorPicture} alt="" srcset="" />
                        <div>
                            <h3>{authorName}</h3>
                            <p>{writtenDate}</p>
                        </div>
                    </div>
                    <h1>{blogTitle}</h1>
                    <a onClick={()=>handleReadTime(readTime)}><u>Mark as read</u> </a>
                </div>
                <p>{readTime} min read  <FontAwesomeIcon onClick={()=>handleBookmark(id,blogTitle)} icon={faBookmark} /></p>
            </div>
            <hr />
        </div>
    );
};

export default BlogContent;