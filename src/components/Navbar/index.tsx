'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className='w-full bg-black 800 fixed pt-2 z-50'>
      <div className='justify-between md:w-4/6  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <Image src='/logo.png' width={60} height={60} alt='' />
            <div className='md:hidden'>
              <button
                className='p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-white'
                    viewBox='0 0 20 20'
                    fill='#fff'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='#fff'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
              }`}
          >
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-gray-300'>
              <li className='text-gray-500 text-2xl font-semibold'>
                <Link href='#perguntas-frequentes'>Tools</Link>
              </li>
              <li className='text-gray-500 text-2xl font-semibold'>
                <Link href=''>Blog</Link>
              </li>
              <li className='text-gray-500 text-2xl font-semibold'>
                <Link href=''>About Us</Link>
              </li>
              <li className='text-2xl font-semibold bg-gray-700 p-4 rounded-md text-white'>
                <Link href='/app'>APP DEMO</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
