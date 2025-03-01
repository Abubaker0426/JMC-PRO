import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import aniImg from '../../assets/H_SliderImg/ani/aniimg (1).jpg'
import aniImg1 from '../../assets/H_SliderImg/ani/aniimg (2).jpg'
import { Button } from '@mui/material';
import banimg from '../../assets/H_SliderImg/ani/aniimg (1).jpg'



const anisliderData = [
    {
        Aniimg: aniImg,
        title: "hi raibi",
        proinfo: "info pepoles",
        priceName: "aaaaaaa",
        amount: "$200",
        Btnlink: "/"
    },
    {
        Aniimg: aniImg1,
        title: "default title",
        proinfo: "default info",
        priceName: "default price",
        amount: "$0",
        Btnlink: "/"
    },
]

function SingleSlider() {
    return (
        <>
            <div className=" container py-44  flex items-center justify-between ">
                <div className="w-[80%]">
                    <Swiper
                        modules={[EffectFade, Autoplay]}
                        effect="fade"
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                    >

                        {anisliderData.map((itemdata, index) => (
                            <SwiperSlide key={index}>
                                <div className="slide-content relative">
                                    <img src={itemdata.Aniimg} alt="Second slide" />
                                    {/* content of projects */}
                                    <div className="caption absolute top-[100px] right-[180px] h-[200px] flex justify-between flex-col">
                                        <h3 className='text-gray-900'>{itemdata.title}</h3>
                                        <p className='text-[25px]  font-[900]'>{itemdata.proinfo} </p>
                                        {/* pricd */}
                                        <div className="">
                                            <span className='mr-2 text-[18px]'>{itemdata.priceName}</span> <span>{itemdata.amount}</span>
                                        </div>
                                        <Button className='link ' component={Link} to={itemdata.Btnlink} variant="outlined" >Show Now</Button>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}

                    </Swiper>
                </div>
                <div className="banerinfo w-[20%] ">
                    <img src={banimg} alt="" />
                </div>
                {/* <div className="banerinfo w-[20%] ">
                    <img src={banimg} alt="" />
                </div> */}
            </div>

        </>
    );
}

export default SingleSlider;

