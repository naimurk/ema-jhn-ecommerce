import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Product from './Product';

const Shop = () => {
    const [products , setProducts] = useState([])
    const [cart, setCart]= useState([])
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then (data => setProducts(data))
    },[])
    // console.log(products);
    const handleCart = (product)=> {
        // console.log(product);
        const newCart = [...cart,product]
        setCart(newCart)
    }
    console.log(cart);
    return (
        <div className='flex '>
            <div className="product-container grid grid-cols-3 px-32 gap-7 py-10 w-4/5">
               {
                products.map(product =>  <Product
                     products = {product}
                     key = {product.id}
                     handleCart = {handleCart}
                     ></Product>)
               }
            </div>
            <div className="cart-container h-2/4 sticky top-0 p-10 m-10 bg-[#FFE0B3] w-1/5">
                <Cart cart = {cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;