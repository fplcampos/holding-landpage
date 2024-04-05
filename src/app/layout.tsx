import { Inter, Tinos } from 'next/font/google';
import './globals.css';

const tinos = Tinos({ weight: ['400', '700'], subsets: ['latin'], })
const inter = Inter({ subsets: ['latin'] })

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