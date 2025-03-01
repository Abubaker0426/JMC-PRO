import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import image1 from '../../assets/H_SliderImg/Hslider (1).jpg'
import image2 from '../../assets/H_SliderImg/Hslider (2).jpg'
import image3 from '../../assets/H_SliderImg/Hslider (3).jpg'
import image4 from '../../assets/H_SliderImg/Hslider (4).jpg'
import image5 from '../../assets/H_SliderImg/Hslider (5).jpg'
import image6 from '../../assets/H_SliderImg/Hslider (6).png'
import image7 from '../../assets/H_SliderImg/Hslider (7).png'

const HomeSlider = () => {
    return (
        <>
            <div className="my-8 homeSlider">
                <Swiper 
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper h-[400px] container rounded-md"
                >
                    <SwiperSlide><img src={image1} alt="slider-image" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={image2} alt="slider-image" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={image3} alt="slider-image" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={image4} alt="slider-image" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={image5} alt="slider-image" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={image6} alt="slider-image" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src={image7} alt="slider-image" className="w-full h-full object-cover" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default HomeSlider;
