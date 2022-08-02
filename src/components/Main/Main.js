import React from 'react';
import ShippingInfo from './ShippingInfo';

const Main = () => {
    return (
        <div className='flex justify-around mt-5'>
            <ShippingInfo className='grid grid-cols-6 gap-4 '></ShippingInfo>
            
            <p className='grid grid-cols-3 m-2 w-full bg-slate-800'> tafsdahkj</p>
            <p className='grid grid-cols-3 w-full bg-slate-500'>tafsdahkj</p>
            
        </div>
    );
};

export default Main;