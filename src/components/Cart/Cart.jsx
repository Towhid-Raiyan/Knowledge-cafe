import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div>
            <div className='reading-time'>

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