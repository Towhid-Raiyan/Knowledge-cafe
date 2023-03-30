import React from 'react';
import './BlogContent.css'

const BlogContent = (props) => {
    console.log(props.blogContent)
    const { id, authorName, blogTitle, writtenDate, readTime, coverPicture, authorPicture } = props.blogContent;
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
                    <button>Mark as read</button>
                </div>
                <p>{readTime} min read</p>
            </div>
            <hr />
        </div>
    );
};

export default BlogContent;