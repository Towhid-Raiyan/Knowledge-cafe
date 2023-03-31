import React from 'react';
import './Cart.css'

const Cart = ({ cart , read}) => {
    // console.log(cart);
    console.log(read);
    let readingTime = 0;
    for(const blog of read){
        console.log(blog)
        console.log(blog.readTime);
        readingTime = readingTime + blog;
        console.log(readingTime)
    }
    return (
        <div>
            <div className='reading-time'>
                <h3 className='reading-time-text'>Spent time on read: {readingTime}</h3>
            </div>
            <div className='cart'>
                <h3 className='bookmark-number'>Bookmarked Blogs: {cart.length}</h3>
                <div className='blog-title-container'>
                    <h5 className='blog-title'>
                        This is it..
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;