import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {img,name,seller,price,rating} = props.products
     const handleCart = props.handleCart
     const removeItem = props.removeItem
    return (
        <div className='bg-white p-0 border-2 box-border  rounded-md relative'>
            <div className='p-5'>
            <img className='pb-7 rounded-md' src={img} alt="" />
            <h3 className='text-xl font-normal'>{name}</h3>
            <p className='text-lg font-medium'>price: {price}</p>
            <p className='mt-8'>manufacturer: {seller}</p>
            <p className='pb-24'>ratings: {rating}</p>
            </div>
            <div className='  w-full absolute bottom-0 flex-col'>
            <button onClick={()=>handleCart(props.products)} className="btn hover:text-white text-black  rounded-t-none rounded-b-md mt-5 border-t-2 border-[#E5E7EB] bg-[#FFE0B3] border-0 w-full">Add to Cart<FontAwesomeIcon icon={faCartShopping} /></button>
            <button onClick={()=> removeItem(props.products)}  className="btn hover:text-white  rounded-t-none rounded-b-md text-white  border-t-2 border-[#E5E7EB]  border-0 w-full">Remove the item<FontAwesomeIcon icon={faTrash} /></button>
            
            {/* <button onClick={()=>handleCart(props.products)} className="btn hover:text-white text-black  rounded-t-none rounded-b-md mt-5 border-t-2 border-[#E5E7EB] bg-[#FFE0B3] border-0 w-full absolute left-0 right-0 bottom-0">Add to Cart<FontAwesomeIcon icon={faCartShopping} /></button> */}
            </div>
             
        </div>
    );
};

export default Product;