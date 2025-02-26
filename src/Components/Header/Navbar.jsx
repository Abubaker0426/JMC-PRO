import { Button } from '@mui/material'
import React, { useState } from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from './CategoryPanel';


const Navbar = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false)

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true)
        alert("")
    }

    return (
        <>
            <div className="container flex items-center justify-between py-4">
                <div className="col_1">
                    <Button className='!text-black gap-1 ' onClick={openCategoryPanel}>
                        <CgMenuLeftAlt className='  text-[18px] font-bold' />
                        Shop By Categories
                        <IoIosArrowDown className='  text-[18px] font-bold' />
                    </Button>
                </div>
                <div className="col_2 ">
                    <div className="flex items-center !justify-center ">
                        <Link to="/"><Button className='link !text-black  !text-[11 px] font-[460]  '>Home</Button> </Link>
                        <Link to="/"><Button className='link !text-black  !text-[11 px] font-[460]  '>Fashion</Button> </Link>
                        <Link to="/"><Button className='link !text-black  !text-[11 px] font-[460]  '>Electronics</Button> </Link>
                        <Link to="/"><Button className='link !text-black  !text-[11 px] font-[460]  '>bags</Button> </Link>
                        <Link to="/"><Button className='link !text-black  !text-[11 px] font-[460]  '>Foot ware</Button> </Link>
                        <Link to="/"><Button className='link !text-black  !text-[11 px] font-[460]  '>Groceries</Button> </Link>
                        <Link to="/"><Button className='link !text-black  !text-[11 px] font-[460]  '>Beauty</Button> </Link>
                        <Link to="/"><Button className='link !text-black  !text-[11 px] font-[460]  '>Wellness</Button> </Link>
                        <Link to="/"><Button className='link !text-black  !text-[11 px] font-[460]  '>Jewellery</Button> </Link>


                    </div>

                </div>
                <div className="col_3 flex ">
                    <Button className='!text-black '>
                        <MdOutlineRocketLaunch className="mr-2" />
                        <p className='!text-[13px]'>  Free International Delivery</p>
                    </Button>
                </div>

            </div>
            <CategoryPanel openCategoryPanel={openCategoryPanel}  isOpenCatPanel={isOpenCatPanel}/>

        </>
    )
}

export default Navbar