import React from 'react';

const Product = (props) => {
    // console.log(props);
    const {img,name,seller,price,rating} = props.products
     const handleCart = props.handleCart
    return (
        <div className='bg-white p-0 border-2 box-border  rounded-md relative'>
            <div className='p-5'>
            <img className='pb-7 rounded-md' src={img} alt="" />
            <h3 className='text-xl font-normal'>{name}</h3>
            <p className='text-lg font-medium'>price: {price}</p>
            <p className='mt-8'>manufacturer: {seller}</p>
            <p className='pb-12'>ratings: {rating}</p>
            </div>
            <button onClick={()=>handleCart(props.products)} className="btn hover:text-white text-black  rounded-t-none rounded-b-md mt-5 border-t-2 border-[#E5E7EB] bg-[#FFE0B3] border-0 w-full absolute left-0 right-0 bottom-0">Add to Cart</button>
        </div>
    );
};

export default Product;