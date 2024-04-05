'use client'

import Link from 'next/link';

export default function Rodape() {
    return (
        <>
            <section className='container px-4 lg:mb-8'>
                <hr className="border-t-2 border-t-fsb pt-14" />
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
                    <rect width="100%" height="100%" fill="#DDDDDD" />
                    <path fill="#999999" d="M57.46 28.74v27.67h14.56v5.03H50.9v-32.7h6.56Zm16.78 20.8v-.48q0-5.43 3.03-8.9 3.04-3.47 8.4-3.47 5.39 0 8.45 3.46 3.05 3.46 3.05 8.91v.48q0 5.48-3.04 8.92-3.04 3.45-8.41 3.45-5.39 0-8.44-3.45-3.04-3.44-3.04-8.92Zm6.54-.48v.48q0 3.32 1.17 5.33 1.16 2.01 3.77 2.01 2.54 0 3.72-2.02 1.17-2.02 1.17-5.32v-.48q0-3.23-1.19-5.27-1.19-2.05-3.75-2.05-2.53 0-3.71 2.06-1.18 2.05-1.18 5.26Zm19.43.9v-.47q0-5.75 2.5-9.28 2.5-3.52 7.02-3.52 2.04 0 3.59.92 1.55.92 2.65 2.63l.52-3.1h5.66v24.19q0 4.74-3.11 7.33-3.11 2.6-8.66 2.6-1.84 0-3.91-.51-2.06-.51-3.82-1.38l1.22-4.9q1.5.72 3.06 1.09 1.56.37 3.41.37 2.69 0 3.96-1.12t1.27-3.5V59.1q-1.08 1.37-2.54 2.09-1.46.72-3.35.72-4.47 0-6.97-3.29t-2.5-8.66Zm6.55-.47v.47q0 3.19 1.08 5.02 1.08 1.83 3.51 1.83 1.5 0 2.55-.55 1.04-.55 1.67-1.6V44.1q-.63-1.1-1.67-1.71-1.05-.6-2.51-.6-2.4 0-3.51 2.13-1.12 2.13-1.12 5.57Zm19.41.05v-.48q0-5.43 3.03-8.9 3.04-3.47 8.4-3.47 5.39 0 8.45 3.46 3.05 3.46 3.05 8.91v.48q0 5.48-3.04 8.92-3.04 3.45-8.41 3.45-5.39 0-8.44-3.45-3.04-3.44-3.04-8.92Zm6.54-.48v.48q0 3.32 1.16 5.33 1.17 2.01 3.78 2.01 2.54 0 3.72-2.02 1.17-2.02 1.17-5.32v-.48q0-3.23-1.19-5.27-1.19-2.05-3.75-2.05-2.53 0-3.71 2.06-1.18 2.05-1.18 5.26Z" />
                </svg>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex flex-col text-xl lg:flex-row font-inter text-fsb lg:w-8/12'>
                        <p>Lorem ipsum</p>
                        <p className='italic font-bold lg:ml-2 font-tinos text-giusti'>& ipsum-dolor</p>
                    </div>
                    <div className='my-4 text-xl lg:my-0 font-inter text-fsb lg:w-6/12'>
                        <ul className='flex flex-col justify-between lg:flex-row'>
                            <li><Link href='#nos'>Footer item_</Link></li>
                            <li><Link href='#empresas'>Footer item_</Link></li>
                            <li><Link href='#manifesto'>Footer item_</Link></li>
                            <li><Link href='#' target='_blank'>Footer item_</Link></li>
                            <li><Link href='#contato'>Footer item_</Link></li>
                        </ul>
                    </div>
                </div>
            </section >
            <footer className="rounded-3xl lg:rounded-[60px] bg-fsb font-inter lg:py-5 p-6">
                <div className="container text-sm text-white">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <Link href="#" target="_blank" className="italic font-tinos" data-cursor-color="#ffffff" data-cursor-background-image="/images/ico-open.svg" data-cursor-size="70px">Lorem ipsum →</Link> tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </footer>
        </>
    )
}