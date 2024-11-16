import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar flex justify-between items-center py-[2rem] px-[4rem] bg-white shadow-md'>
            <div className="logoDiv">
                <h1 className="logo text-[32px] font-bold text-blue-600 tracking-narrow">
                    JOB<span className="text-black">3.0</span>
                </h1>
            </div>

            <div className="menu flex gap-10 align-middle">
                <Link to="/jobs">
                    <li className="menuList list-none text-[18px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        Jobs
                    </li>
                </Link>
                <Link to="/companies">
                    <li className="menuList list-none text-[18px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        Companies
                    </li>
                </Link>
                <Link to="/aboutus">
                    <li className="menuList list-none text-[18px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        About us
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="menuList list-none text-[18px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        Contact
                    </li>
                </Link>
                <Link to="/blog">
                    <li className="menuList list-none text-[18px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        Blog
                    </li>
                </Link>
                <Link to="/login">
                    <li className="menuList list-none text-[18px] font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                        Login
                    </li>
                </Link>
                <Link to="/register">
                    <li className="menuList list-none text-[18px] font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 cursor-pointer">
                        Register
                    </li>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
