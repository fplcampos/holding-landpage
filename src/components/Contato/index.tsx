'use client'

import Link from 'next/link';

export default function Contato() {
    return (
        <>
            <section className='container px-4 mt-20 mb-14 lg:mb-12 lg:mt-17'>
                <h3 className="text-5xl italic font-bold lg:text-4xl text-giusti font-tinos">Lorem</h3>
                <p className="text-2xl text-fsb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <Link href="mailto:fplcampos@gmail.com" target="_blank" className="text-giusti">fplcampos@gmail.com →</Link></p>
            </section>
        </>
    )
}