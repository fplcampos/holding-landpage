'use client'

import Link from 'next/link';

export default function Contato() {
    return (
        <>
            <section className='container px-4 mt-20 mb-14 lg:mb-12 lg:mt-17'>
                <h3 className="text-5xl italic font-bold lg:text-4xl text-giusti font-tinos">Contato</h3>
                <p className="text-2xl text-fsb">Se tiver dúvida ou interesse em algum dos nossos serviços contate-nos via <Link href="mailto:contato@fsb.com.br" target="_blank" className="text-giusti">contato@fsb.com.br →</Link></p>
            </section>
        </>
    )
}