import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CategoryPanel from './CategoryPanel';

const Navbar = () => {
    // State to track which dropdown is currently open
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Navigation items with their dropdown contents
    const navItems = [
        {
            title: "Home",
            path: "/",
            hasDropdown: false
        },
        {
            title: "Fashion",
            hasDropdown: true,
            dropdownItems: [
                { title: "Men", path: "/fashion/men" },
                { title: "Women", path: "/fashion/women" },
                { title: "Kids", path: "/fashion/kids" }
            ]
        },
        {
            title: "Electronics",
            hasDropdown: true,
            dropdownItems: [
                { title: "Mobiles", path: "/electronics/mobiles" },
                { title: "Laptops", path: "/electronics/laptops" },
                { title: "Accessories", path: "/electronics/accessories" }
            ]
        },
        {
            title: "Bags",
            hasDropdown: true,
            dropdownItems: [
                { title: "Backpacks", path: "/bags/backpacks" },
                { title: "Handbags", path: "/bags/handbags" },
                { title: "Travel Bags", path: "/bags/travel" }
            ]
        },
        {
            title: "Footwear",
            hasDropdown: true,
            dropdownItems: [
                { title: "Men", path: "/footwear/men" },
                { title: "Women", path: "/footwear/women" },
                { title: "Kids", path: "/footwear/kids" }
            ]
        },
        {
            title: "Groceries",
            hasDropdown: true,
            dropdownItems: [
                { title: "Fresh", path: "/groceries/fresh" },
                { title: "Packaged", path: "/groceries/packaged" },
                { title: "Beverages", path: "/groceries/beverages" }
            ]
        },
        {
            title: "Beauty",
            hasDropdown: true,
            dropdownItems: [
                { title: "Makeup", path: "/beauty/makeup" },
                { title: "Skincare", path: "/beauty/skincare" },
                { title: "Haircare", path: "/beauty/haircare" }
            ]
        },
        {
            title: "Wellness",
            hasDropdown: true,
            dropdownItems: [
                { title: "Fitness", path: "/wellness/fitness" },
                { title: "Yoga", path: "/wellness/yoga" },
                { title: "Supplements", path: "/wellness/supplements" }
            ]
        },
        {
            title: "Jewellery",
            hasDropdown: true,
            dropdownItems: [
                { title: "Gold", path: "/jewellery/gold" },
                { title: "Silver", path: "/jewellery/silver" },
                { title: "Diamond", path: "/jewellery/diamond" }
            ]
        }
    ];

    // Handle toggle dropdown
    const handleToggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    // Handle hover functionality
    const handleMouseEnter = (index) => {
        if (navItems[index].hasDropdown) {
            setActiveDropdown(index);
        }
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className="sticky top-0 bg-white shadow-sm z-50 transition-all duration-300 hover:shadow-md">
            <div className="container flex items-center justify-between py-4">
                <div className="col_1">
                    <CategoryPanel />
                </div>
                <div className="col_2">
                    <div className="flex items-center !justify-center">
                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.hasDropdown ? (
                                    <Button
                                        className="link !text-black !text-[11px] font-[460] !min-width-0 !px-3"
                                        onClick={() => handleToggleDropdown(index)}
                                    >
                                        {item.title}
                                        {activeDropdown === index ?
                                            <IoIosArrowUp className="ml-1 text-[10px]" /> :
                                            <IoIosArrowDown className="ml-1 text-[10px]" />
                                        }
                                    </Button>
                                ) : (
                                    <Link to={item.path}>
                                        <Button className="link !text-black !text-[11px] font-[460] !min-width-0 !px-3">
                                            {item.title}
                                        </Button>
                                    </Link>
                                )}

                                {/* Dropdown Menu with CSS transitions */}
                                {activeDropdown === index && item.hasDropdown && (
                                    <div
                                        className="absolute top-full left-0 bg-white shadow-md rounded-md min-w-[150px] z-10 opacity-100 transform translate-y-0 transition-all duration-200 ease-in-out"
                                        style={{ animation: "fadeInDown 0.2s ease-in-out" }}
                                    >
                                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                            <Link
                                                key={dropdownIndex}
                                                to={dropdownItem.path}
                                                className="block link"
                                            >
                                                <div
                                                    className="px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-50 transition-all duration-200 link"
                                                >
                                                    {dropdownItem.title}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col_3 flex">
                    <div className="hover:scale-105 transition-transform duration-200">
                        <Button className="!text-black">
                            <MdOutlineRocketLaunch className="mr-2" />
                            <p className="!text-[13px]">Free International Delivery</p>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar