import React from 'react';
import './Shipping.css'
import { FaShoppingCart, FaShippingFast } from "react-icons/fa";


const Shipping = () => {
    return ( 
        <div className='ml-10 mr-10 mt-14 mb-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl'>Shipping and Payment</h1>
                </div>
                <div className='flex items-center'>
                        <FaShoppingCart class="h-10 w-10 rounded-full cart "></FaShoppingCart>
                        <hr  className='hr'/>

                    <FaShippingFast class="h-10 w-10 cart1 "></FaShippingFast>

                </div>
            </div>
        </div>
    );
};

export default Shipping;