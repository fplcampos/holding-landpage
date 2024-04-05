'use client'

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { LogoCompany, LogoCompany10, LogoCompany2, LogoCompany3, LogoCompany4, LogoCompany5, LogoCompany6, LogoCompany7, LogoCompany8, LogoCompany9 } from '@/utils/logos';
import 'swiper/css';
import 'swiper/css/autoplay';
import CarrosselMarcasItem from './carrosselMarcasItem';

export default function Carrossel() {

    const marcas = [{
        logo: <LogoCompany className='w-full max-h-10' />,
        color: 'text-fsbcom',
        description: 'Nome empresa'
    },
    {
        logo: <LogoCompany2 className='w-full max-h-10' />,
        color: 'text-loures',
        description: 'Nome empresa'
    },
    {
        logo: <LogoCompany3 className='w-full max-h-10' />,
        color: 'text-jotacom',
        description: 'Nome empresa'
    },
    {
        logo: <LogoCompany4 className='w-full max-h-14' />,
        color: 'text-giustipr',
        description: 'Nome empresa'
    },
    {
        logo: <LogoCompany5 className='w-full max-h-12' />,
        color: 'text-loures',
        description: 'Nome empresa'
    },
    {
        logo: <LogoCompany6 className='w-full max-h-14' />,
        color: 'text-ipri',
        description: 'Nome empresa'
    },
    {
        logo: <LogoCompany7 className='w-full max-h-12' />,
        color: 'text-f5growth',
        description: 'Nome empresa'
    },
    {
        logo: <LogoCompany8 className='w-full max-h-12' />,
        color: 'text-beon',
        description: 'Nome empresa'
    },
    {
        logo: <LogoCompany9 className='w-full max-h-12' />,
        color: 'text-beon',
        description: 'Nome empresa'
    },
    {
        logo: <LogoCompany10 className='w-full max-h-12' />,
        color: 'text-deck',
        description: 'Nome empresa'
    }];

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
                className='swiperMarcas lg:mt-7 lg:mb-56'
            >
                {
                    marcas.map((obj, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <CarrosselMarcasItem logo={obj.logo} color={obj.color} description={obj.description} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper >
        </>
    );
};

