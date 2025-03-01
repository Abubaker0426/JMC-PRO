import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import headerlogo from '../assets/headerImg/logo.jpg'
import Search from './Sreach/Search'
// 
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    return (
        <>
            <header>
                {/* first sec */}
                <div className="top-strip  py-2 border-t-[1px] border-b-[1px] border-gray-150 ">
                    <div className="container">
                        <div className="flex items-center justify-between">
                            <div className="col1 w-[50%]">
                                <p className='text-[14px] text-black ' >Get up to 50% off new season styles, limited time only </p>
                                {/* Ensure that the CSS class 'text-black' is defined correctly in your CSS file */}
                            </div>
                            <div className="col2 flex items-center justify-end">
                                <ul className='flex items-center justify-between gap-2' >
                                    <li className='list-none'>
                                        <Link to="/helpCenter" className='text-[12px] link font-[500] transition' >Help Center </Link>
                                    </li>
                                    <li className='list-none ' >
                                        <Link to="/orderTracking" className='text-[12px] link font-[500] transition' >Order Tracking</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second sec */}
                <div className="header py-3">
                    <div className="container flex items-center justify-between">
                        <div className="col1 w-[25%] ">
                            <Link to="/">
                                <img src={headerlogo} alt="my-logo" />
                            </Link>
                        </div>

                        <div className="col2 w-[45%]">
                            <Search />
                        </div>

                        <div className="col3 w-[30%] flex items-center pl-5">
                            <div className="flex items-center gap-3">
                                <Link to="/login" className='link transition text-[15px] font-[500]'>Login</Link> |
                                <Link to="/register" className='link transition text-[15px] font-[500]' >Register</Link>
                                <div className="">
                                 
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header