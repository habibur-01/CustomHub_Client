

import SectionHeader from "../SharedComponent/Header/SectionHeader";
import pic from '../../assets/image/Max-R_Headshot (1).jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from "../SharedComponent/Container/Container";


const BestCreator = () => {

    return (
        <Container>
            <div>
                <SectionHeader title={'Best Contest Creator'} subTitle={'Some Amazing Workers build precious contest'} />
                <div className="h-[600px]">

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                         
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <div className="flex justify-center items-center gap-6 p-6">
                                <div className="w-[350px] h=[400px] border-2 shadow-md">
                                    <img src={pic} className="w-full h-full object-cover overflow-hidden rounded-md" alt="picture" />
                                </div>
                                <div className="w-1/3 flex flex-col items-center border-2 p-6 rounded-md">
                                    <p className="py-2 "><span className="mr-2 font-bold">Name:</span>Habibur Rahman Zihad</p>
                                    <p className="py-2 "><span className="mr-2 font-bold">Contest name:</span> Code Challenger</p>
                                    <p className="py-2"><span className="mr-2 font-bold">Description:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus cupiditate consectetur ipsum ut rem voluptas iste corrupti! Repellendus, esse iure.</p>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="flex justify-center items-center gap-6 p-6">
                                <div className="w-[350px] h=[400px] border-2 shadow-md">
                                    <img src={pic} className="w-full h-full object-cover overflow-hidden rounded-md" alt="picture" />
                                </div>
                                <div className="w-1/3 flex flex-col items-center border-2 p-6 rounded-md">
                                    <p className="py-2 "><span className="mr-2 font-bold">Name:</span>Habibur Rahman Zihad</p>
                                    <p className="py-2 "><span className="mr-2 font-bold">Contest name:</span> Code Challenger</p>
                                    <p className="py-2"><span className="mr-2 font-bold">Description:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus cupiditate consectetur ipsum ut rem voluptas iste corrupti! Repellendus, esse iure.</p>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center items-center gap-6 p-6">
                                <div className="w-[350px] h=[400px] border-2 shadow-md">
                                    <img src={pic} className="w-full h-full object-cover overflow-hidden rounded-md" alt="picture" />
                                </div>
                                <div className="w-1/3 flex flex-col items-center border-2 p-6 rounded-md">
                                    <p className="py-2 "><span className="mr-2 font-bold">Name:</span>Habibur Rahman Zihad</p>
                                    <p className="py-2 "><span className="mr-2 font-bold">Contest name:</span> Code Challenger</p>
                                    <p className="py-2"><span className="mr-2 font-bold">Description:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus cupiditate consectetur ipsum ut rem voluptas iste corrupti! Repellendus, esse iure.</p>

                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>


                </div>

            </div>
        </Container>
    );
};

export default BestCreator;