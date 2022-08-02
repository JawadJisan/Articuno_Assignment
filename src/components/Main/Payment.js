import React from 'react';
import pp from './../../images/pp.png'

const Payment = () => {
    return (
        <div className='grid w-full lg:ml-20 lg:pl-5 ml-10 '>
            <p className='text-xl'>Payment Method</p>
            <div className='grid grid-cols-3  justify-items-center'>
                <img className='logo' src={pp} alt="" />
                <img className='logo' src={pp} alt="" />
                <img className='logo' src={pp} alt="" />
                <img className='logo' src={pp} alt="" />
                <img className='logo' src={pp} alt="" />
                <img className='logo' src={pp} alt="" />
            </div>

            <p className='text-xl'>Delivery Method</p>
            <div className='grid grid-cols-2  justify-items-center'>
                <div className='flex deliver items-center'>
                    <img className='delivery' src={pp} alt="" />
                    <span>$20.00</span>
                </div>
                <div className='flex deliver items-center'>
                    <img className='delivery' src={pp} alt="" />
                    <span>$20.00</span>
                </div>
                <div className='flex deliver items-center'>
                    <img className='delivery' src={pp} alt="" />
                    <span>$20.00</span>
                </div>
                <div className='flex deliver items-center'>
                    <img className='delivery' src={pp} alt="" />
                    <span>$20.00</span>
                </div>


            </div>
        </div>
    );
};

export default Payment;