import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer p-[5rem] mb-4 bg-gray-800 rounded-[10px] gap-[8px] grid grid-cols-5 m-auto items-center justify-center'>
            <div>
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                        <strong>Job</strong>Search
                    </h1>
                </div>
                <p className='text-gray-300 pb-[13px] opacity-70 leading-7'>
                    One Aim!! Get the Candidate Placed
                </p>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold py-[1.5rem] text-gray-200'>
                    Company
                </span>

                <div className='grid gap-3'>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>About Us</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Features</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>News</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>FAQ</li>
                </div>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold py-[1.5rem] text-gray-200'>
                    Resources
                </span>

                <div className='grid gap-3'>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Blog</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Help Center</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Contact Us</li>
                </div>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold py-[1.5rem] text-gray-200'>
                    Support
                </span>

                <div className='grid gap-3'>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Documentation</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Tutorials</li>
                    <li className='text-gray-400 hover:text-white cursor-pointer'>Community</li>
                </div>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold py-[1.5rem] text-gray-200'>
                    Follow Us
                </span>

                <div className='flex gap-5'>
                    <AiFillInstagram className='text-gray-400 hover:text-white text-[25px]' />
                    {/* Add more icons as needed */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
