'use client'

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { LogoBeon, LogoBussola, LogoDeck, LogoF5Growth, LogoFSB, LogoGiusti, LogoIpri, LogoJotacom, LogoLoures, LogoSeta } from '@/utils/logos';
import 'swiper/css';
import 'swiper/css/autoplay';
import CarrosselMarcasItem from './carrosselMarcasItem';

export default function Carrossel() {

    const marcas = [{
        logo: <LogoFSB className='w-full max-h-10' />,
        color: 'text-fsbcom',
        description: 'Comunicação Corporativa'
    },
    {
        logo: <LogoLoures className='w-full max-h-10' />,
        color: 'text-loures',
        description: 'Consultoria em Relações Públicas e Comunicação'
    },
    {
        logo: <LogoJotacom className='w-full max-h-10' />,
        color: 'text-jotacom',
        description: 'Publicidade, Mídia, Conteúdo e Performance'
    },
    {
        logo: <LogoGiusti className='w-full max-h-14' />,
        color: 'text-giustipr',
        description: 'Creative PR'
    },
    {
        logo: <LogoSeta className='w-full max-h-12' />,
        color: 'text-loures',
        description: 'Relações Institucionais e Governamentais'
    },
    {
        logo: <LogoIpri className='w-full max-h-14' />,
        color: 'text-ipri',
        description: 'Instituto de Pesquisa'
    },
    {
        logo: <LogoF5Growth className='w-full max-h-12' />,
        color: 'text-f5growth',
        description: 'PR para negócios que moldam o futuro'
    },
    {
        logo: <LogoBeon className='w-full max-h-12' />,
        color: 'text-beon',
        description: 'Consultoria em ESG'
    },
    {
        logo: <LogoBussola className='w-full max-h-12' />,
        color: 'text-beon',
        description: 'Conteúdo Estratégico'
    },
    {
        logo: <LogoDeck className='w-full max-h-12' />,
        color: 'text-deck',
        description: 'Marketing de Influência'
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

