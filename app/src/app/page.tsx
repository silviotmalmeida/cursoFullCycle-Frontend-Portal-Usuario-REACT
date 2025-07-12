import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    // componente geral
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        {/* banner */}

        <div className='pt-10 mb-10 lg:mb-20'>
          <div className='flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
            <div className='absolute top-0 left-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
              <Image
                src='/banner.png'
                alt='MAID'
                fill={true}
                className='object-cover object-top opacity-30 filter'
              />
            </div>
            <h1 className='text-4xl font-bold lg:text-7xl'>The Witcher</h1>
            <p className='text-sm text-gray-300 text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl'>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences.
            </p>
          </div>
          <div className='flex flex-row space-x-3'>
            <button className='flex cursor-pointer items-center rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
              Play
            </button>
            <button className='flex cursor-pointer items-center rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
              More Info
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
