import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const {read} = props;
    const bookMarks = props.bookmark;
    console.log(bookMarks[0].blogTitle);
    

    const [readingTime,setReadingTime] = useState(read);
    useEffect(()=>{
        const getReadTime = localStorage.getItem("ReadingTime");
        setReadingTime(getReadTime); 
    },[read])
    for (let bookmark of bookmarks){

    }
    return (
        <div>
            <div className='reading-time'>
                <h3 className='reading-time-text'>Spent time on read: {readingTime} min</h3>
            </div>
            <div className='cart'>
                <h3 className='bookmark-number'>Bookmarked Blogs: {bookMarks.length}</h3>
                <div className='blog-title-container'>
                    <h5 className='blog-title'>
                        for (let bookmark of bookmarks){
                            console.log(bookmark.blogTitle)
                        }
                        {
                            
                            // bookMarks.map((bookmark)= {
                            //     <p>{bookmark.blogTitle}</p>
                            // })
                        }
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;