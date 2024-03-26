"use client";
import { Inter } from 'next/font/google'
import Header from './components/Header'
import './globals.css'
import { Mulish } from 'next/font/google'
import Footer from './components/Footer'
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

 
const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const initScroll = () => {
    const scrollContainer = document.querySelector('#scroll-container');
    if (scrollContainer) {
      const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        // Add more Locomotive Scroll options as needed
      });
    } else {
      console.error('Scroll container not found');
    }
  };

  initScroll();

  return (
    <html lang="en" className={mulish.className}>
      <body id="scroll-container">
        
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
