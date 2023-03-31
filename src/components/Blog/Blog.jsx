import React, { useEffect, useState } from 'react';
import BlogContent from '../BlogContent/BlogContent';
import Cart from '../Cart/Cart';
import './Blog.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
    const [blogContents, setBlogContents] = useState([]);
    const [read, setRead] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogContents(data))
    }, [])

    

    useEffect(() => {

        const storedBookmark = localStorage.getItem("bookmarks");

        if (storedBookmark) {
            setBookmark(JSON.parse(storedBookmark));
        }
        
    }, []);

    const handleReadTime = (blogContent) => {
        const previousReadTime = JSON.parse(localStorage.getItem("ReadingTime"));
        if (previousReadTime) {
            const sum = previousReadTime + blogContent;
            localStorage.setItem("ReadingTime", sum);
            setRead(sum);
        }
        else {
            localStorage.setItem("ReadingTime", blogContent);
            setRead(blogContent);
        }
    }



    const handleBookmark = (id, blogTitle) => {
        
        let storedBookmark = JSON.parse(localStorage.getItem("bookmarks"));
        let bookMarked = [];
        const blog = { id, blogTitle };
        if (storedBookmark) {
            const isMarked = storedBookmark.find((pd) => pd.id == id);
            if (isMarked) {
                toast.error('Already Added in Bookmark', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            }
            else {
                bookMarked.push(...storedBookmark, blog);
                setBookmark(bookMarked);
                localStorage.setItem("bookmarks", JSON.stringify(bookMarked));
            }
        }
        else {
            bookMarked.push(blog);
            setBookmark(bookMarked);
            localStorage.setItem("bookmarks", JSON.stringify(bookMarked));
        }
    }



    return (
        <div className='blog-container'>
            <div className="blog-content-container">
                {
                    blogContents.map(blogContent => <BlogContent
                        key={blogContent.id}
                        blogContent={blogContent}
                        handleReadTime={handleReadTime}
                        handleBookmark={handleBookmark}
                    ></BlogContent>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    read={read}
                    bookmark ={bookmark}
                ></Cart>
            </div>
        </div>
    );
};

export default Blog;