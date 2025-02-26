import React from 'react'
import './Search.css'
import { FaSearch } from "react-icons/fa"
import Button from '@mui/material/Button'

const Search = () => {
    return (
        <>
            <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative ">
                <input type="text" placeholder=' Search for products.. '
                    className='w-full  h-[45px] focus:outline-none bg-inherit p-2 text-[15px]' />
                <Button className='!absolute top-[8px] right-[5px] !w-[38px] !min-w-[37px] !h-[38px] !rounded-full !text-black' >
                    <FaSearch className='text-[#3d3d3d] text-[18px] ' />
                </Button>
            </div>
        </>
    )
}

export default Search