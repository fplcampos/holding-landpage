import { Metadata } from 'next';
import { Inter, Tinos } from 'next/font/google';
import './globals.css';

const tinos = Tinos({ weight: ['400', '700'], subsets: ['latin'], })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FSB Holding',
  description: 'O maior e mais completo ecossistema de Marketing e Comunicação para gestão reputacional da América Latina. Prazer somos.',
  keywords: ['fsb', 'fsb holding'],
  openGraph: {
    url: 'https://fsbholding.com.br/',
    images: 'https://fsbholding.com.br/images/FSB-Holding.png',
    locale: 'pt_BR',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <html lang="pt-br" className='scroll-smooth'>
        <body className={`${tinos.className} ${inter.className} cursor-none`}>
          <main className='overflow-hidden'>
            {children}
          </main>
        </body>
      </html>
    </>
  )
}