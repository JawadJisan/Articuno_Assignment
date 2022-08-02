import React from 'react';
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import './nav.css'



const Navbar = () => {
    return (
        <div className='ml-10 mr-10'>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl"><span className='text-orange-600'>E</span>-Shop</a>
                </div>


                <div class="navbar-center">
                    <a class="btn btn-ghost normal-case text-xl pl-5 pr-5">Men</a>
                    <a class="btn btn-ghost pl-5 pr-5 normal-case text-xl">Women</a>
                    <a class="btn btn-ghost normal-case pl-5 pr-5 text-xl">Kids</a>
                </div>


                <div class="navbar-end">
                    <button class="btn btn-ghost mr-8 btn-circle">
                        <FaSearch class="h-8 w-8 "></FaSearch>
                    </button>
                    <button class="btn btn-ghost btn-circle mr-8">
                       <FaShoppingCart class="h-8 w-8 "></FaShoppingCart>
                    </button>
                    <button class="btn btn-ghost btn-circle">
                       <FaUserAlt class="h-8 w-8 "></FaUserAlt>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;