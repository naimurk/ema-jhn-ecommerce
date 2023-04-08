import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewCartItem = ({ pd , removeCartHandler}) => {
    const { img, id, price, quantiy, name, shipping } = pd
    return (
        <div className=' flex items-center border p-4 mb-10'>
            <div className='flex'>
                <img src={img} className='w-20 h-17' alt="" />
                <div className='pl-3'>
                    <h1 className='text-xl'>{name}</h1>
                    <p>price: <span className='text-orange-500 font-semibold' >{price}</span></p>
                    <p>shipping <span className='text-orange-500 font-semibold'>{shipping}</span></p>
                    <p>total: {shipping+price*quantiy}</p>
                </div>
            </div>
            <div className=' grow relative '>
              <div> <FontAwesomeIcon onClick={()=>  removeCartHandler(id)} className='bg-red-100 p-4 rounded-full text-red-600 absolute right-0 text-2xl' icon={faTrash} /></div>
            </div>
        </div>
    );
};

export default ReviewCartItem;