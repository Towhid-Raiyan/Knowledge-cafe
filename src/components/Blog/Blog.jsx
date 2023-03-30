import React, { useEffect, useState } from 'react';
import BlogContent from '../BlogContent/BlogContent';
import './Blog.css'

const Blog = () => {
    const [blogContents, setBlogContents] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogContents(data))
    },[])
    return (
        <div className='blog-container'>
            <div className="blog-content-container">
                {
                    blogContents.map(blogContent => <BlogContent
                        key ={blogContent.id}
                        blogContent ={blogContent}
                    ></BlogContent>)
                }
            </div>
            <div className="blog-summary-container">
                <h3>Blog summary</h3>
            </div>
        </div>
    );
};

export default Blog;