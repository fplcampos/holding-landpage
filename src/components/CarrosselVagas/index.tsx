'use client'

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function CarrosselVagas() {

    const styles = [
        'italic font-inter',
        'font-bold uppercase font-tinos',
        'font-medium uppercase font-inter',
        'font-extrabold capitalize font-tinos',
        'italic font-black lowercase font-inter',
        'italic font-inter',
        'font-bold uppercase font-tinos',
        'font-medium uppercase font-inter',
        'font-extrabold capitalize font-tinos',
        'italic font-black lowercase font-inter',
    ]

    return (
        <>
            <Swiper
                modules={[Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={5000}
                className={'swiperVagas text-fsb text-center text-4xl lg:text-44xl mt-4 mb-10 lg:mt-0 lg:mb-5 lg:leading-normal'}
            >
                {
                    styles.map((obj, key) => {
                        return (
                            <SwiperSlide key={key} className='py-4'>
                                <Link href="https://www.google.com.br" target="_blank" className={obj} data-cursor-color="#ffffff" data-cursor-background-image="/images/ico-open.svg" data-cursor-size="70px">Lorem_</Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper >
        </>
    );
};