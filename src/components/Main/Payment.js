import React from 'react';
import pp from './../../images/pp.png'
import visa from './../../images/visa.png'
import master from './../../images/master.png'
import discover from './../../images/discover.png'
import idel from './../../images/idel.png'
import inpost from './../../images/inpost.png'
import dpd from './../../images/dpd.jpg'
import dhl from './../../images/dhl.png'
import fed from './../../images/fed.png'


const Payment = () => {
    return (
        <div className='grid w-full lg:ml-20 lg:pl-5 ml-10 '>
            <p className='text-xl'>Payment Method</p>
            <div className='grid grid-cols-3  justify-items-center'>
                <img className='logo' src={pp} alt="" />
                <img className='logo' src={visa} alt="" />
                <img className='logo' src={master} alt="" />
                <img className='logo' src={master} alt="" />
                <img className='logo' src={discover} alt="" />
                <img className='logo' src={idel} alt="" />
            </div>

            <p className='text-xl'>Delivery Method</p>
            <div className='grid grid-cols-2  justify-items-center'>
                <div className='flex deliver items-center '>
                    <img className='delivery' src={inpost} alt="" />
                    <span className='ml-2 text-xl'>$20.00</span>
                </div>
                <div className='flex deliver items-center'>
                    <img className='delivery' src={dpd} alt="" />
                    <span className='ml-2 text-xl'>$20.00</span>
                </div>
                <div className='flex deliver items-center'>
                    <img className='delivery' src={dhl} alt="" />
                    <span className='ml-2 text-xl'>$20.00</span>
                </div>
                <div className='flex deliver items-center'>
                    <img className='delivery' src={fed} alt="" />
                    <span className='ml-2 text-xl'>$20.00</span>
                </div>


            </div>
        </div>
    );
};

export default Payment;