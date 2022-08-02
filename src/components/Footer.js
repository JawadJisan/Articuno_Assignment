import React from 'react';
import { FaArrowLeft} from "react-icons/fa";


const Footer = () => {
    return (
        <div className='flex justify-between items-center mb-20 mt-24 mr-24'>
            <div>
                <button class="btn button2 text-black"> <FaArrowLeft/> BACK</button>
            </div>

            <div className='flex'>
                <button class="btn button1 text-black">CONTINUE SHOPPING</button>
                <button class=" button btn">PROCEED TO PAYMENT</button>
            </div>
        </div>
    );
};

export default Footer;