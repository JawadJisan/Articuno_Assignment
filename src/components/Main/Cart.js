import React from 'react';
import pp from './../../images/pp.png'
import { FaShoppingCart, FaShippingFast } from "react-icons/fa";



const Cart = () => {
    return (
        <div className='ml-10 mr-24 grid  w-fit'>
            <h1 className='text-xl'>Your Cart</h1>

           <div className='items-center'>
           <div className='flex items-center w-full'>
                <img className='cartlogo m-5' src={pp} alt="" />
                <div className='m-5'>
                    <p>T-Shirt</p>
                    <p>Summer Vibes</p>
                    <p className='textCode'>#261311</p>
                </div>
                <h1 className='m-5'>$89.99</h1>
            </div>
            <div className='flex items-center w-full'>
                <img className='cartlogo m-5' src={pp} alt="" />
                <div className='m-5'>
                    <p>Basic Slim</p>
                    <p>Fit T-Shirt</p>
                    <p className='textCode'>#212315</p>
                </div>
                <h1 className='m-5'>$69.99</h1>
            </div>

            <p className='total'>Total Cost: <span className='ml-7 text-xl font-semibold'>$159.98</span> </p>

            <div className='flex text-center new items-center'>
                <FaShippingFast class="h-10 w-10 rounded-full cart "></FaShippingFast>
                <p>You are <span className='text-xl font-semibold'>$30.02</span> away <br /> from free shipping! </p>

            </div>
           </div>
        </div>
    );
};

export default Cart;