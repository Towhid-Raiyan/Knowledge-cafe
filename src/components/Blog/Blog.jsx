import React, { useEffect, useState } from 'react';
import BlogContent from '../BlogContent/BlogContent';
import Cart from '../Cart/Cart';
import './Blog.css'

const Blog = () => {
    const [blogContents, setBlogContents] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogContents(data))
    },[])
    const handleReadTime = (blogContent) =>{
        const newCart = [...cart,blogContent];
        setCart(newCart);
    }
    const handleBookmark =(blogContent)=>{
        const newCart = [...cart,blogContent];
        setCart(newCart);
    }

    return (
        <div className='blog-container'>
            <div className="blog-content-container">
                {
                    blogContents.map(blogContent => <BlogContent
                        key ={blogContent.id}
                        blogContent ={blogContent}
                        handleReadTime = {handleReadTime}
                        handleBookmark = {handleBookmark}
                    ></BlogContent>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Blog;