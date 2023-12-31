import React, { useEffect, useState } from 'react';
import BlogContent from '../BlogContent/BlogContent';
import Cart from '../Cart/Cart';
import './Blog.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <div className='blog-container container'>
            <div className='row'>
                <div className="blog-content-container col-12 col-sm-8 ">
                    {
                        blogContents.map(blogContent => <BlogContent
                            key={blogContent.id}
                            blogContent={blogContent}
                            handleReadTime={handleReadTime}
                            handleBookmark={handleBookmark}
                        ></BlogContent>)
                    }

                </div>
                <div className="cart-container col-12 col-sm-4 ">
                    <Cart
                        read={read}
                        bookmark={bookmark}
                    ></Cart>
                </div>
            </div>
            <div className='bg-info p-4 rounded my-2 col-sm-8'>
                <h5>Difference between Props and State?</h5>
                <p>A state is mutable structure which is used to contain data about components and State Changes can be Asynchronous. State is mutable.Props are read only components. Props allow to pass data from one component to another component. Props are immutable. Props can be accessed by the child component. But State cannot be accessed by child components. Props are external and controlled by whatever renders the component. On the otherhand The State is internal and controlled by the React Component itself.</p>
            </div>
            <div className='bg-info p-4 rounded my-2 col-sm-8'>
                <h5>How Does useState work?</h5>
                <p>
                    The useState is a React Hook that allows us to create, track and update state in a functional component. Every time a component renders, useState gives an array containing two values: The state variable with the value that is stored. And a state setter function which can update the state variable and trigger React to render the component again.
                </p>
            </div>
            <div className='bg-info p-4 rounded my-2 col-sm-8'>
                <h5>Use case of useEffect except loading data ?</h5>
                <p>
                    The useEffect hook load/fetch data from API. It has also many use case rather then loading data. useEffect running on state changes. So we can use for live filtering. Also it can directly updating the DOM and Timer also. As useEffect Running on state change: we can trigger animation on new array value.
                </p>
            </div>
            <div className='bg-info p-4 rounded my-2 col-sm-8'>
                <h5>How does react work ?</h5>
                <p>
                    React is a popular JavaScript library created by Facebook. React divide the user interface into reusable components. Components are like javascript function. React has many useful features like useState , useEffect , props etc. React also provide a mechanism called virtual DOM. When we make some change, the virtual DOM only changes the specific object in the dom instead all of the objects. Virtual Dom understands which area needs to send the update and avoids the other areas.
                </p>
            </div>
        </div>
    );
};

export default Blog;