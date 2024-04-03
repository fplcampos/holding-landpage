'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import Modal from "../Modal";

export default function Manifesto() {

    const [openModal, setOpenModal] = useState(false);

    const VideoOpts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.playVideo();
    }

    const animations = {
        transition: {
            type: "spring",
            duration: 1.5
        }
    }

    return (
        <>
            <section className='relative z-20 lg:mt-[480px] -top-10 cursor-pointer' data-cursor-text="Assista" data-cursor-color="#0070f3" data-cursor-size="80px">
                <div
                    onClick={() => setOpenModal(!openModal)}
                    className='video'>
                    <Image
                        src={`/images/bg-video.png`}
                        width={1728}
                        height={1118}
                        alt={`Vídeo`}
                        className='hidden lg:block 2xl:w-full'
                    />
                    <Image
                        src={`/images/bg-videoMobile.png`}
                        width={375}
                        height={844}
                        alt={`Vídeo`}
                        className='w-full lg:hidden'
                    />
                    <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                        <motion.div
                            className='font-normal text-white leading-[90px] text-9xl lg:text-big opacity-35'
                            initial={{ x: '50%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { ...animations.transition, delay: 1 } }}
                        >
                            <p className="absolute z-10 flex items-center justify-center w-16 h-16 text-sm font-medium text-center text-white -translate-x-1/2 -translate-y-1/2 rounded-full opacity-100 lg:hidden bg-giusti font-inter left-1/2 top-1/2">Assistir</p>
                            <p className='font-tinos text-mobile lg:text-extra opacity-35'>mani</p>
                            <p className='font-inter opacity-35'>festo</p>
                        </motion.div>
                    </div>
                </div >
            </section >
            <Modal open={openModal} onOpenChange={setOpenModal}>
                <YouTube
                    className="w-full h-full"
                    videoId={'-_9QbLkCA5I'}
                    title={'Vídeo Manifesto'}
                    opts={VideoOpts}
                    onReady={onPlayerReady}
                />
            </Modal>
        </>
    )
}