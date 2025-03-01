import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../../Components/AdsBannerSlider/AdsBannerSlider';


const SAdBanner = () => {
    return (
        <>
            <div className="bg-white py-7 my-14 ">
                {/* first */}
                <div className="w-full container ">
                    <div className="flex items-center justify-between border border-red-500 rounded-lg px-6 py-3 bg-white">
                        <div className="flex items-center gap-3">

                            <FaShippingFast className='text-[45px]' />
                            <span className="font-bold text-gray-800 text-lg">FREE SHIPPING</span>
                        </div>

                        <div className="text-center flex-grow">
                            <span className="text-gray-700">Free Delivery Now On Your First Order and over $200</span>
                        </div>

                        <div className="font-bold text-gray-800">
                            <span>- Only <span className="text-xl">$200*</span></span>
                        </div>
                    </div>
                </div>
                {/* banners */}
                <AdsBannerSlider />

            </div>
        </>
    )
}

export default SAdBanner