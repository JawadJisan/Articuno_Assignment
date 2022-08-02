import React from 'react';
import Payment from './Payment';
import ShippingInfo from './ShippingInfo';

const Main = () => {
    return (
        <div className='flex justify-around mt-5'>
            <ShippingInfo className='grid grid-cols-6 gap-4 '></ShippingInfo>
            <Payment className='grid grid-cols-3 m-2 w-full'></Payment>
            
            
            <p className='grid grid-cols-3 w-full bg-slate-500'>tafsdahkj</p>
            
        </div>
    );
};

export default Main;