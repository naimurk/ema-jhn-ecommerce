import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';
import ReviewCartItem from './ReviewCartItem';
import { removeFromDb } from '../utilities/fakedb';

const Oder = () => {
    const saveCart = useLoaderData()
    const [cart, setCart] = useState(saveCart)
    const removeCartHandler = (id) => {
     const remaingCart = cart.filter(pd=> pd.id !== id)
     setCart(remaingCart)
     removeFromDb(id)
     
    }
    return (
        <div className='flex justify-evenly'>
             <div className=' m-10 product-container'>
                  {
                    cart.map(pd => <ReviewCartItem
                    key={pd.id}
                    pd = {pd}
                    removeCartHandler = {removeCartHandler}
                    ></ReviewCartItem>)
                  }
             </div>

             <div className="cart-container h-2/4 sticky top-0 p-10 m-10 bg-[#FFE0B3] w-1/5">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Oder;