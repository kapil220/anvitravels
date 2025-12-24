// components/layout/Header.jsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  // Determine if link is active
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
            
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              Anvi Travels
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/"
              className={`${
                isActive('/') 
                  ? isScrolled ? 'text-blue-600' : 'text-white font-bold' 
                  : isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
              } transition duration-300`}
            >
              Home
            </Link>
            <Link 
              href="/packages"
              className={`${
                isActive('/packages') 
                  ? isScrolled ? 'text-blue-600' : 'text-white font-bold' 
                  : isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
              } transition duration-300`}
            >
              Packages
            </Link>
            <Link 
              href="/#taxi-services"
              className={`${
                isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
              } transition duration-300`}
              onClick={closeMobileMenu}
            >
              Taxi Services
            </Link>
            <Link 
              href="/#about"
              className={`${
                isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
              } transition duration-300`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              href="/contact"
              className={`${
                isActive('/contact') 
                  ? isScrolled ? 'text-blue-600' : 'text-white font-bold' 
                  : isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
              } transition duration-300`}
            >
              Contact
            </Link>
            
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={isScrolled ? 'text-blue-900' : 'text-white'}>
              {isMobileMenuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white shadow-lg rounded-b-lg mt-2">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/"
                className={`px-4 py-2 ${isActive('/') ? 'text-blue-600 font-bold' : 'text-gray-800 hover:text-blue-600'}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/packages"
                className={`px-4 py-2 ${isActive('/packages') ? 'text-blue-600 font-bold' : 'text-gray-800 hover:text-blue-600'}`}
                onClick={closeMobileMenu}
              >
                Packages
              </Link>
              <Link 
                href="/#taxi-services"
                className="px-4 py-2 text-gray-800 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                Taxi Services
              </Link>
              <Link 
                href="/#about"
                className="px-4 py-2 text-gray-800 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/contact"
                className={`px-4 py-2 ${isActive('/contact') ? 'text-blue-600 font-bold' : 'text-gray-800 hover:text-blue-600'}`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link 
                href="/blog"
                className={`px-4 py-2 ${isActive('/blog') ? 'text-blue-600 font-bold' : 'text-gray-800 hover:text-blue-600'}`}
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}