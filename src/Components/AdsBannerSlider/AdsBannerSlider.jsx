// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // images
// import img1 from '../../assets/bannerImg/banner (1).png'
// import img2 from '../../assets/bannerImg/banner (2).jpg'
// import img3 from '../../assets/bannerImg/banner (3).jpg'
// import img4 from '../../assets/bannerImg/banner (4).jpg'

// // Correctly formatted banner images array
// const bannerImg = [
//   { img: img1, bannerPath: "/" },
//   { img: img2, bannerPath: "/" },
//   { img: img3, bannerPath: "/" },
//   { img: img4, bannerPath: "/" },
//   { img: img4, bannerPath: "/" },
//   { img: img4, bannerPath: "/" },
//   { img: img4, bannerPath: "/" },
// ];

// const AdsBannerSlider = () => {
//   // Correctly use useRef with null initial value
//   const swiperRef = useRef(null);

//   return (
//     <>
//       <div className="container pt-8">
//         <Swiper
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={10}
//           slidesPerView={4} // Default to 1 for mobile
//           navigation={true}
//           pagination={{ clickable: true }}
//           loop={bannerImg.length > 1} // Only loop if there's more than one image
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 1 },
//             1024: { slidesPerView: 1 },
//           }}
//           className="mySwiper"
//         >
//           {bannerImg.map((item, index) => (
//             <SwiperSlide key={index}>
//               <Link to={item.bannerPath}>
//                 <img
//                   src={item.img}
//                   alt={`Ad-banner-img-${index + 1}`}
//                   className="w-[300px] h-[200px] rounded-md"
//                 />
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default AdsBannerSlider;


import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Images
import img1 from '../../assets/bannerImg/banner (1).png'
import img2 from '../../assets/bannerImg/banner (2).jpg'
import img3 from '../../assets/bannerImg/banner (3).jpg'
import img4 from '../../assets/bannerImg/banner (4).jpg'

// Banner images array
const bannerImg = [
  { img: img1, bannerPath: "/" },
  { img: img2, bannerPath: "/" },
  { img: img3, bannerPath: "/" },
  { img: img4, bannerPath: "/" },
  { img: img4, bannerPath: "/" },
  { img: img4, bannerPath: "/" },
  { img: img4, bannerPath: "/" },
];

// Custom nav styles
const customNavStyles = `
  .ads-swiper .swiper-button-next,
  .ads-swiper .swiper-button-prev {
    background-color: rgba(255, 255, 255, 0.8);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #333;
  }

  .ads-swiper .swiper-button-next:after,
  .ads-swiper .swiper-button-prev:after {
    font-size: 14px;
    font-weight: bold;
  }
`;

const AdsBannerSlider = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <style>{customNavStyles}</style>
      <div className="container pt-8">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="ads-swiper"
        >
          {bannerImg.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="group">
              <Link to={item.bannerPath}>
                <img
                  src={item.img}
                  alt={`Ad-banner-img-${index + 1}`}
                  className="w-[300px] h-[200px] rounded-lg mx-auto  translate-all  group-hover:scale-110"
                />
              </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AdsBannerSlider;