import React from 'react';

const ShippingInfo = () => {
    return (
        <div className='grid w-full'>
            <div className='flex'>
                <button class="button btn">LOG IN</button>
                <button class="btn button1 text-black">SIGN UP</button>
            </div>
            <p className='mt-4 mb-4 text-lg'>Shipping Information</p>

            <div className='grid grid-cols-2 w-full'>
                <input type="email" placeholder="Email" class="input inputss mb-5 mr-2" />
                <input type="text" placeholder="Address" class="input inputss mb-5 " />
                <input type="text" placeholder="First Name" class="input inputss mb-5 mt-2 mr-2 " />
                <input type="text" placeholder="City" class="input inputss mb-5 mt-2" />
                <input type="text" placeholder="Last Name" class="input inputss  mb-5 mt-2 mr-2" />
                <input type="text" placeholder="Postal Code / Zip" class="input inputss  mb-5 mt-2" />
                <input type="text" placeholder="Phone Number" class="input inputss mb-5 mt-2 mr-2" />

                {/*  */}
                <div class="form-control  mb-5 mt-2 inputss">
                    <div class="input-group ">
                        <select class="select  w-full ">
                            <option disabled selected>Country</option>
                            <option>India</option>
                            <option>Bangladesh</option>
                            <option>Pakistan</option>
                            <option>USA</option>
                            <option>Canada</option>

                        </select>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default ShippingInfo;