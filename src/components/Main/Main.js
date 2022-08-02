import React from 'react';
import Cart from './Cart';
import Payment from './Payment';
import ShippingInfo from './ShippingInfo';

const Main = () => {
    return (
        <div className='lg:flex justify-around mt-12'>
            <ShippingInfo className='grid grid-cols-6 gap-4 '></ShippingInfo>
            <Payment className='grid grid-cols-3 m-2 w-full'></Payment>
            <Cart className='grid grid-cols-3 w-full'></Cart>
    
        </div>
    );
};

export default Main;