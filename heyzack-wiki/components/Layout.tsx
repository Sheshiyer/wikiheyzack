import React, { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import components to avoid hydration issues
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'HeyZack Documentation',
  description = 'Documentation and resources for HeyZack Building Management Solution and HeyZack Home',
}: LayoutProps) {
  const [showFooter, setShowFooter] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handle scroll events to show/hide footer
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Show footer when scrolled down more than 100px
      if (position > 100) {
        setShowFooter(true);
      } else {
        // Only hide footer when at the very top
        if (position < 50) {
          setShowFooter(false);
        }
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`${title}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <div className={`transition-opacity duration-300 ${showFooter ? 'opacity-100' : 'opacity-0'}`}>
        <Footer />
      </div>
    </div>
  );
}
