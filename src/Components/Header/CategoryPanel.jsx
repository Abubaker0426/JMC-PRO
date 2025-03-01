import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { CiSquareMinus } from "react-icons/ci";

const CategoryPanel = () => {
    // State to manage the drawer (open/close)
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // Sample categories expanded with all categories from your image
    const categories = [
        {
            title: "Fashion",
            expanded: true,
            subcategories: [
                {
                    title: "Men",
                    expanded: true,
                    links: ["T-shirts", "Jeans"]
                },
                {
                    title: "Women",
                    expanded: false,
                    links: ["Dresses", "Tops", "Bottoms"]
                },
                {
                    title: "Kids",
                    expanded: false,
                    links: ["Boys", "Girls", "Infants"]
                }
            ]
        },
        {
            title: "Electronics",
            expanded: false,
            subcategories: [
                {
                    title: "Mobiles",
                    expanded: false,
                    links: ["Apple", "Samsung", "OnePlus"]
                },
                {
                    title: "Laptops",
                    expanded: false,
                    links: ["Gaming", "Business", "Student"]
                }
            ]
        },
        {
            title: "Bags",
            expanded: false,
            subcategories: [
                {
                    title: "Backpacks",
                    expanded: false,
                    links: ["School", "Travel", "Fashion"]
                }
            ]
        },
        {
            title: "Footwear",
            expanded: false,
            subcategories: [
                {
                    title: "Men",
                    expanded: false,
                    links: ["Casual", "Formal", "Sports"]
                },
                {
                    title: "Women",
                    expanded: false,
                    links: ["Heels", "Flats", "Boots"]
                }
            ]
        },
        {
            title: "Groceries",
            expanded: false,
            subcategories: [
                {
                    title: "Fresh",
                    expanded: false,
                    links: ["Fruits", "Vegetables", "Dairy"]
                }
            ]
        },
        {
            title: "Beauty",
            expanded: false,
            subcategories: [
                {
                    title: "Makeup",
                    expanded: false,
                    links: ["Face", "Eyes", "Lips"]
                }
            ]
        },
        {
            title: "Wellness",
            expanded: false,
            subcategories: [
                {
                    title: "Fitness",
                    expanded: false,
                    links: ["Equipment", "Supplements", "Clothing"]
                }
            ]
        },
        {
            title: "Jewellery",
            expanded: false,
            subcategories: [
                {
                    title: "Precious",
                    expanded: false,
                    links: ["Gold", "Silver", "Diamond"]
                }
            ]
        }
    ];

    // State to manage the category expansion
    const [expandedCategories, setExpandedCategories] = useState(
        categories.map(category => ({ 
            expanded: category.expanded,
            subcategories: category.subcategories.map(sub => ({ expanded: sub.expanded }))
        }))
    );

    // Toggle category expansion
    const toggleCategory = (categoryIndex) => {
        setExpandedCategories(prev => {
            const newState = [...prev];
            newState[categoryIndex].expanded = !newState[categoryIndex].expanded;
            return newState;
        });
    };

    // Toggle subcategory expansion
    const toggleSubcategory = (categoryIndex, subcategoryIndex) => {
        setExpandedCategories(prev => {
            const newState = [...prev];
            newState[categoryIndex].subcategories[subcategoryIndex].expanded = 
                !newState[categoryIndex].subcategories[subcategoryIndex].expanded;
            return newState;
        });
    };

    // Drawer content
    const DrawerList = (
        <Box sx={{ width: 280 }} role="presentation" className="CategoryPanel">
            {/* Header with Close Button */}
            <div className="flex p-3 items-center justify-between bg-gray-100">
                <h2 className="font-semibold text-[16px]">Shop By Categories</h2>
                <Button onClick={toggleDrawer(false)} className="!min-width-0 !p-1 !rounded-full">
                    <IoClose className="text-[22px] text-gray-600" />
                </Button>
            </div>
            <Divider />

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
                <ul className="w-full">
                    {categories.map((category, categoryIndex) => (
                        <li key={categoryIndex} className="list-none border-b border-gray-200">
                            {/* Main Category Button */}
                            <Button 
                                className="w-full !text-left !text-black !justify-start !normal-case !py-3 !px-4 flex items-center"
                                onClick={() => toggleCategory(categoryIndex)}
                            >
                                <span className="text-[14px] font-medium">{category.title}</span>
                                <span className="ml-auto">
                                    {expandedCategories[categoryIndex].expanded ? (
                                        <CiSquareMinus className="text-[20px]" />
                                    ) : (
                                        <FiPlusSquare className="text-[20px]" />
                                    )}
                                </span>
                            </Button>

                            {/* Subcategory List */}
                            {expandedCategories[categoryIndex].expanded && (
                                <ul className="bg-white">
                                    {category.subcategories.map((subcategory, subcategoryIndex) => (
                                        <li key={subcategoryIndex} className="list-none link">
                                            {/* Subcategory Button */}
                                            <Button
                                                className="w-full !text-left !text-gray-800 !justify-start !normal-case !py-2 !px-6 flex items-center"
                                                onClick={() => toggleSubcategory(categoryIndex, subcategoryIndex)}
                                            >
                                                <span className="text-[14px]">{subcategory.title}</span>
                                                <span className="ml-auto">
                                                    {expandedCategories[categoryIndex].subcategories[subcategoryIndex].expanded ? (
                                                        <CiSquareMinus className="text-[18px]" />
                                                    ) : (
                                                        <FiPlusSquare className="text-[18px]" />
                                                    )}
                                                </span>
                                            </Button>

                                            {/* Links List */}
                                            {expandedCategories[categoryIndex].subcategories[subcategoryIndex].expanded && (
                                                <ul className="py-1">
                                                    {subcategory.links.map((link, linkIndex) => (
                                                        <li key={linkIndex} className="list-none ">
                                                            <Link to="/" className="block text-[13px] text-gray-600 py-1.5 px-8 hover:bg-gray-100 link">
                                                                {link}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </Box>
    );

    return (
        <>
            {/* Open Drawer Button */}
            <Button onClick={toggleDrawer(true)} className="!text-black gap-2 flex items-center !normal-case">
                <CgMenuLeftAlt className="text-[18px] font-bold" />
                Shop By Categories
                <IoIosArrowDown className="text-[18px] font-bold" />
            </Button>

            {/* Drawer Component */}
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
};

export default CategoryPanel;