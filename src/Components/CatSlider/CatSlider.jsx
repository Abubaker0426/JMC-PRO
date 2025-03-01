import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Category images
import fashionImage from "../../assets/Catsliderimg/fashion.png";
import electronicsImage from "../../assets/Catsliderimg/electronics.png";
import bagsImage from "../../assets/Catsliderimg/bags.png";
import footwearImage from "../../assets/Catsliderimg/footwear.png";
import groceriesImage from "../../assets/Catsliderimg/groceries.png";
import beautyImage from "../../assets/Catsliderimg/beauty.png";
import wellnessImage from "../../assets/Catsliderimg/wellness.png";
import jewelleryImage from "../../assets/Catsliderimg/jewellery.png";

const CatSlider = () => {
  const categories = [
    { name: "Fashion", image: fashionImage, path: "/fashion" },
    { name: "Electronics", image: electronicsImage, path: "/electronics" },
    { name: "Bags", image: bagsImage, path: "/bags" },
    { name: "Footwear", image: footwearImage, path: "/footwear" },
    { name: "Groceries", image: groceriesImage, path: "/groceries" },
    { name: "Beauty", image: beautyImage, path: "/beauty" },
    { name: "Wellness", image: wellnessImage, path: "/wellness" },
    { name: "Jewellery", image: jewelleryImage, path: "/jewellery" },
    { name: "Jewellery", image: jewelleryImage, path: "/jewellery" },
  ];

  // Swiper reference for control (optional)
  const swiperRef = useRef(null);

  return (
    <div className="CatSlider  my-6 container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={8}
        navigation
        pagination={{ clickable: true }}
        loop={true} // Continuous sliding
        autoplay={{ delay: 2000, disableOnInteraction: true }} // Auto-slide every 2s
        breakpoints={{
          640: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
        }}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Link to={category.path}>
              <div className="flex flex-col items-center p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img src={category.image} alt={category.name} className="max-w-full max-h-full" />
                </div>
                <p className="text-center text-gray-700">{category.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CatSlider;
