import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Link from 'next/link';
const LogoSlider = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView="auto"
            spaceBetween={50}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={2500}
            breakpoints={{
                320: {
                    slidesPerView: 1.7,
                },
                600: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 5,
                },
                1600: {
                    slidesPerView: 7,
                },
            }}
            dir={isRtl ? 'rtl' : 'ltr'}
            key={isRtl ? 'true' : 'false'}
        >
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/partners logo/FEder.png" alt="" className="mx-auto h-[50px] transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/partners logo/afric.png" alt="" className="mx-auto h-[50px] transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/partners logo/wfp2.png" alt="" className="mx-auto h-[50px] transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide className="flex h-full items-center justify-center">
                <Link href="#">
                    <img src="/assets/images/partners logo/World Bank.png" alt="" className="mx-auto h-[40px] w-[180px] transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/partners logo/undp-logo-blue.png" alt="" className="mx-auto h-[50px] transition hover:scale-110" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/partners logo/unicef.png" alt="" className="mx-auto h-[40px] transition hover:scale-110" />
                </Link>
            </SwiperSlide>

            <SwiperSlide>
                <Link href="#">
                    <img src="/assets/images/partners logo/afric.png" alt="" className="mx-auto h-[50px] transition hover:scale-110" />
                </Link>
            </SwiperSlide>
        </Swiper>
    );
};

export default LogoSlider;
