import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    let totalprice = 0
    let totalshipping = 0
    const { cart } = props
    for (const product of cart) {
        totalprice = totalprice + product.price
        totalshipping = totalshipping + product.shipping
    }

    const tax = totalprice*7/100
    const grandTotal = tax+totalprice+totalshipping;
    return (
        <div className=''>
            <h1 className='text-center font-semibold text-2xl '>Order Summary</h1>
            <div className='my-8'>
                <p className='my-2 text-lg'>Selected item: {cart.length}</p>
                <p className='my-2 text-lg'>price: ${totalprice}</p>
                <p className='my-2 text-lg'>total shipping charge: ${totalshipping}</p>
                <p className='my-2 text-lg'>Tax: ${tax.toFixed(2)}</p>
                <h1 className='font-bold text-xl'>Grand Total : ${ grandTotal.toFixed(2) }</h1>
                <div className='py-5'>
                <button className="btn btn-wide my-1 bg-[red] border-none mx-auto">remove cart<FontAwesomeIcon icon={faTrash} /></button>
                <button className="btn btn-wide my-1 bg-[orange] border-none mx-auto">review order <FontAwesomeIcon icon={faCartShopping} /></button>
                </div>
            </div>
        </div>
    );
};

export default Cart;