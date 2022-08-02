import React from 'react';
import './Shipping.css'
import { FaSearch, FaShoppingCart, FaShippingFast, FaStore } from "react-icons/fa";


const Shipping = () => {
    return (
        <div>
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