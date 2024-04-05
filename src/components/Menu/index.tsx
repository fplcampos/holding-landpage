'use client'

import Link from 'next/link';
import { useState } from 'react';
import SocialLinks from '../SocialLinks';
interface Props {
    // Defina as propriedades do componente, se houver
}

export default function Menu() {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    };

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setIsVisible(false);
    };

    return (
        <>
            <div className="relative flex justify-between w-full lg:justify-normal xl:w-10/12 2xl:w-9/12">
                <div className="w-5/12 px-5 py-3 bg-white bg-opacity-50 lg:px-4 lg:w-2/12 rounded-xl ">
                    <p className='text-5xl'>LOGO</p>
                </div>
                <a href="#" className='relative z-50 lg:mt-1 xl:mt-2 2xl:mt-1' onClick={handleClick}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {!isVisible ?
                            (
                                <>
                                    <rect width="48" height="48" rx="24" fill="#04193A" />
                                    <line x1="13.75" y1="15.25" x2="34.25" y2="15.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="13.75" y1="23.25" x2="27.25" y2="23.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="13.75" y1="31.25" x2="34.25" y2="31.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </>
                            )
                            :
                            (
                                <>
                                    <rect width="48" height="48" rx="24" fill="#04193A" />
                                    <line x1="16.2217" y1="31.9393" x2="30.7174" y2="17.4437" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    <line x1="17.2823" y1="17" x2="31.778" y2="31.4957" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </>
                            )
                        }
                    </svg>
                </a>
                {isVisible &&
                    <div className="fixed top-0 left-0 flex flex-col items-stretch w-full h-screen ml-0 text-white shadow-lg justify-evenly lg:justify-between lg:h-min lg:mt-0 lg:relative lg:text-xs lg:py-4 lg:rounded-full bg-giusti lg:ml-0 font-inter lg:px-9 lg:w-8/12">
                        <ul className="flex flex-col w-full px-4 mb-10 ml-0 space-y-10 text-4xl lg:justify-between lg:mb-0 lg:text-xl lg:space-y-0 lg:space-x-12 lg:flex-row">
                            <li><Link href="#nos" onClick={handleLinkClick}>Menu item_</Link></li>
                            <li><Link href="#empresas" onClick={handleLinkClick}>Menu item_</Link></li>
                            <li><Link href="#manifesto" onClick={handleLinkClick}>Menu item_</Link></li>
                            <li><Link href="#contato" onClick={handleLinkClick}>Menu item_</Link></li>
                        </ul>
                        <SocialLinks />
                    </div>
                }
            </div>
        </>
    )
}