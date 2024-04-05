'use client'

import Carrossel from '@/components/CarrosselMarcas';
import CarrosselVagas from '@/components/CarrosselVagas';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import Manifesto from '@/components/Manifesto';
import Menu from '@/components/Menu';
import Particles from '@/components/Particles';
import SocialLinks from '@/components/SocialLinks';
import { LogoCompany } from '@/utils/logos';
import { motion } from "framer-motion";
import Link from 'next/link';
import { useEffect } from "react";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import TagManager from 'react-gtm-module';

export default function Home() {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PC86LFC' });
  }, []);

  const animations = {
    transition: {
      type: "spring",
      duration: 1.5
    }
  }

  return (
    <>
      <div className='hidden lg:block'>
        <Cursor isGelly={true} />
      </div>
      <div data-cursor-color="#082057" data-cursor-size="20px">
        <header className="fixed z-50 w-full pt-16 mx-auto lg:pt-24 menu">
          <motion.div
            className="container px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { ...animations.transition } }}
          >
            <Menu />
          </motion.div >
        </header >
        <section>
          <div className='container px-4 pt-40 pl-8 lg:pt-48 2xl:pt-64'>
            <div className='z-10 text-5xl font-medium leading-none font-inter lg:text-10xl text-fsb'>
              <motion.p
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: 0 } }}
              >
                Lorem ipsum
              </motion.p>
            </div>
            <div className='z-10 text-5xl font-medium leading-none font-inter lg:text-10xl text-fsb'>
              <motion.p
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .1 } }}
              >
                dolor sit amet
              </motion.p>
            </div>
            <motion.p
              className='z-10 text-5xl font-medium leading-none font-tinos lg:text-9xl text-holding'
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .15 } }}
            >
              & lorem/ipsum
            </motion.p>
            <motion.div
              className='flex justify-end w-full mt-40 text-xl font-normal mb-28 lg:mb-56 lg:mt-0 font-inter lg:w-10/12'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .2 } }}
            >
              <p className='max-w-[215px] lg:max-w-sm'>phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor</p>
            </motion.div>
            <motion.div
              className="absolute top-[268px] lg:top-[500px] w-full left-0 lg:w-6/12 -z-10 opacity-50"
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .2 } }}
            >
              <Particles />
            </motion.div>
          </div>
        </section >
        <section className='min-h-fit'>
          <div className='relative z-40 lg:overflow-hidden' id='nos'>
            <motion.div
              className='mb-10 lg:absolute top-0 text-center lg:text-left lg:left-24 2xl:left-56 font-medium uppercase font-inter text-holding text-7xl lg:text-9xl lg:w-[1595px]'
              initial={{ x: '50%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { ...animations.transition } }}
            >
              Commodo quis
            </motion.div>
            <motion.div
              className='mx-auto w-7/12 lg:w-4/12 lg:pt-[303px]'
              initial={{ y: 120 }}
              whileInView={{ y: 0, transition: { ...animations.transition, delay: .1 } }}
            >
              <LogoCompany className="relative z-50 w-full h-auto fill-fsb" />
            </motion.div>
          </div>
          <div className='relative z-30 flex justify-end'>
            <motion.div
              className='relative pb-20 lg:absolute -top-5 lg:-top-10 rounded-bl-[50px] lg:right-0 bg-giusti lg:py-36 lg:pl-28 z-30 lg:w-7/12 w-8/12 px-10 py-8 '
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: -10, opacity: 1, transition: { ...animations.transition, delay: .2 } }}
              exit={{ y: -200, opacity: 0 }}
            >
              <motion.div
                className='text-xl font-normal font-inter lg:w-9/12 2xl:w-8/12'
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 40, opacity: 1, transition: { ...animations.transition, delay: .4 } }}
              >
                <p>viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                <p className='mt-8'>viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea.</p>
                <div className='mt-8 text-2xl italic font-bold text-white font-tinos'>
                  <p>eu tincidunt tortor aliquam</p>
                  <p>sed vulputate</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      <motion.div
        id="manifesto"
        initial={{ x: '-50%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 1, transition: { ...animations.transition, delay: .1, duration: 3 } }}
      >
        <Manifesto />
      </motion.div>

      <section className='relative z-0 bg-bgparticles 2xl:pt-56' id='empresas' data-cursor-color="#082057" data-cursor-size="20px">
        <div className='container px-4 mb-8 lg:mb-0'>
          <div className='flex flex-col items-end w-full mb-8 lg:flex-row lg:items-center lg:justify-start'>
            <motion.p className='font-medium uppercase text-fsb font-inter text-titulo-holding xl:text-11xl'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .2 } }}>Holding</motion.p>
            <motion.svg className="w-12 h-12 rounded-full lg:h-20 lg:w-20 lg:ml-10 bg-giusti" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .3 } }}>
              <circle cx="40" cy="40" r="40" transform="rotate(90 40 40)" fill="#469BF8" />
              <path d="M29.36 46.8L38.16 46.8L38.16 21.04L39.84 21.04L39.84 46.8L48.64 46.8L39 57.12L29.36 46.8Z" fill="white" />
            </motion.svg>
          </div>
          <motion.p className='text-2xl font-normal font-inter text-fsb xl:w-8/12 2xl:w-6/12'
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .23 } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</motion.p>
        </div>
      </section>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .3 } }}>
        <Carrossel />
      </motion.div>
      <div data-cursor-color="#082057" data-cursor-size="20px">
        <section data-cursor-color="#ffffff" data-cursor-background-image="/images/ico-open.svg" data-cursor-size="70px">
          <motion.div className='rounded-[50px] bg-giusti mt-40 px-6 py-8 lg:pt-10 lg:pb-10 relative overflow-hidden'
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .2 } }}>
            <div className='container text-white font-inter'>
              <Link href="#" className='absolute top-0 left-0 w-full h-full' target='_blank'></Link>
              <p className='w-full text-2xl font-normal xl:w-5/12'>Lorem ipsum dolor sit amet</p>
              <div className='flex flex-col lg:flex-row'>
                <p className='italic leading-tight lg:leading-10 text-7xl font-inter lg:text-12xl lg:pb-6 md:pt-4'>adipiscing</p>
                <svg className='w-3/12 mt-8 lg:mt-0 lg:w-1/12 lg:ml-8' viewBox="0 0 99 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M51.008 53.064C41.548 53.064 29.68 50.398 21.854 44.464H15.576C12.48 41.196 10.932 35.176 10.932 26.662C10.932 20.212 12.824 13.16 15.49 10.15C15.748 10.064 18.93 10.322 20.306 10.322C23.316 10.322 24.434 10.15 29.336 6.28C34.668 2.066 38.108 0.689997 43.268 0.689997C49.202 0.689997 54.018 1.464 57.63 2.926C61.414 4.474 64.424 5.334 65.972 5.764C67.004 6.022 68.036 6.538 68.724 7.054C71.218 7.226 73.712 7.398 76.206 7.656C80.162 8.086 85.15 8.688 88.676 9.118C95.728 9.978 98.738 11.956 98.738 16.084C98.738 20.126 95.9 22.018 90.31 22.018C88.332 22.018 84.29 21.76 80.678 21.76C77.926 21.76 75.26 21.932 72.766 22.104C73.798 23.566 74.142 25.028 74.142 27.092C74.142 29.844 72.938 31.478 70.444 32.596C69.67 32.94 69.24 33.284 69.24 33.886C69.24 34.832 70.1 36.122 70.1 37.756C70.1 40.68 68.638 42.744 65.886 43.69C65.112 43.948 65.026 44.12 65.026 45.41C65.026 50.57 60.124 53.064 51.008 53.064ZM51.008 50.14H54.448C53.072 49.71 51.266 49.022 48.6 47.646C45.16 45.84 42.236 43.518 40.946 41.626C40.774 41.196 40.688 40.508 40.688 39.906C40.688 38.788 41.204 37.756 41.806 37.068C39.656 35.95 37.764 34.832 36.818 34.058C36.388 33.542 35.958 32.596 35.872 31.478C34.324 31.994 32.604 32.166 30.626 32.166C29.25 32.166 27.788 31.994 26.756 31.736V28.726C27.702 28.984 29.508 29.07 30.626 29.07C33.034 29.07 34.926 28.812 36.474 28.038C37.248 26.662 38.624 25.716 40.344 25.544C40.086 24.77 39.914 23.91 39.914 23.05C39.914 20.126 41.806 17.632 45.332 17.632C46.622 17.632 47.912 18.062 49.288 18.578C49.718 17.976 50.234 17.288 50.664 16.514C48.772 15.998 47.31 15.31 46.708 14.708L49.03 12.644C50.062 13.762 59.264 15.482 62.79 15.482C65.112 15.482 67.348 14.02 67.348 10.838V9.978H67.262C67.262 9.72 66.144 9.032 65.198 8.774C63.65 8.344 60.382 7.398 56.426 5.764C53.244 4.474 48.772 3.786 43.268 3.786C38.796 3.786 36.044 4.904 31.228 8.774C26.154 12.816 24.176 13.418 20.306 13.418C19.446 13.418 18.07 13.332 17.038 13.246C15.318 16.256 14.028 21.674 14.028 26.662C14.028 33.542 15.06 38.444 17.038 41.368H22.886C29.164 46.7 40 50.14 51.008 50.14ZM7.32 47.302C1.73 47.302 0.182 35.176 0.182 27.264C0.182 19.438 1.816 7.14 7.32 7.14H13.77C14.802 7.14 15.49 7.914 15.49 9.204V9.376C15.06 8.86 14.802 8.774 14.2 8.774C9.384 8.774 8.094 19.524 8.094 27.264C8.094 35.176 9.642 45.84 14.2 45.84C14.802 45.84 15.146 45.582 15.49 44.98V45.582C15.49 46.528 15.06 47.302 13.77 47.302H7.32ZM60.898 22.018C61.5 19.954 63.994 18.922 66.488 18.922C68.036 18.922 68.896 19.008 69.67 19.18C73.11 19.008 77.324 18.664 80.678 18.664C84.376 18.664 88.418 18.922 90.31 18.922C94.438 18.922 95.642 18.062 95.642 16.084C95.642 13.934 93.836 13.074 88.246 12.214C84.806 11.698 80.076 11.182 75.776 10.752C74.228 10.58 72.336 10.494 70.358 10.322V10.752C70.358 15.74 66.918 18.578 62.962 18.578C60.726 18.578 57.028 18.062 53.674 17.288C53.244 18.148 52.728 18.922 52.212 19.696H52.298C53.76 20.212 56.426 21.33 60.898 22.018ZM63.908 31.908C65.284 31.908 66.574 31.392 68.81 30.016C70.702 28.812 71.046 28.554 71.046 27.35C71.046 25.286 70.788 23.308 69.154 22.018C68.552 21.932 68.036 21.932 67.606 21.932C64.338 21.932 63.392 23.222 63.392 25.458C57.802 24.856 54.706 23.738 51.524 22.534C49.374 21.846 47.052 20.212 45.16 20.47C44.214 20.556 42.924 21.072 42.924 22.706C42.924 23.394 43.354 24.512 43.44 24.77C45.074 26.06 48.342 28.124 53.932 30.102C57.286 31.306 61.672 31.908 63.908 31.908ZM62.532 41.454C65.198 41.454 67.348 40.508 67.348 38.1C67.348 36.724 67.004 35.434 66.66 34.574C65.8 34.918 65.198 35.004 64.338 35.004C62.36 35.004 57.2 34.23 53.502 33.026C49.546 31.736 45.848 29.93 43.096 28.21C42.408 27.952 41.806 27.78 41.204 27.78C39.656 27.78 38.71 29.156 38.71 30.618C38.71 31.306 38.968 32.08 39.312 32.596C40.946 33.8 46.622 36.724 50.406 38.186C55.48 40.164 59.264 41.454 62.532 41.454ZM59.264 48.076C62.016 48.076 62.446 45.926 62.446 44.636C62.446 44.464 62.446 44.292 62.36 44.12H61.758C57.028 44.12 52.728 41.97 49.546 40.68C48.17 40.078 46.364 39.304 44.644 38.444C44.128 38.96 43.698 39.82 43.612 40.594C44.558 41.884 46.794 43.69 49.116 44.98C52.212 46.7 54.018 48.076 59.264 48.076Z" fill="white" />
                </svg>
              </div>
            </div>
          </motion.div>
        </section>
        <CarrosselVagas />
      </div>
      <div id="contato"></div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .2 } }}>
        <Contato />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { ...animations.transition, delay: .25 } }}>
        <Footer />
      </motion.div>
      <div className='hidden lg:block'>
        <SocialLinks />
      </div>
    </>
  )
}