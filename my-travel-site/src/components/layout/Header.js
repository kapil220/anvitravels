// components/layout/Header.jsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  // Determine if link is active
  const isActive = (path) => {
    return pathname === path;
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 text-white shadow-md py-4"
      style={{backgroundColor: '#2B153F'}}
      animate={{
        y: isVisible ? 0 : -100,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      initial={{ y: 0 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <motion.div
                className="relative h-10 w-10 mr-2"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/download.png"
                  alt="Anvi Travels Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.span
                className="text-xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Anvi Travels
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className={`${
                  isActive('/')
                    ? 'text-[#FF8A3D] font-bold'
                    : 'text-white hover:text-[#FFC266]'
                } transition duration-300`}
              >
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/packages"
                className={`${
                  isActive('/packages')
                    ? 'text-[#FF8A3D] font-bold'
                    : 'text-white hover:text-[#FFC266]'
                } transition duration-300`}
              >
                Packages
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#taxi-services"
                className="text-white hover:text-[#FFC266] transition duration-300"
                onClick={closeMobileMenu}
              >
                Taxi Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#about"
                className="text-white hover:text-[#FFC266] transition duration-300"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className={`${
                  isActive('/contact')
                    ? 'text-[#FF8A3D] font-bold'
                    : 'text-white hover:text-[#FFC266]'
                } transition duration-300`}
              >
                Contact
              </Link>
            </motion.div>
          </motion.nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-white">
              {isMobileMenuOpen ? '×' : '☰'}
            </span>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden py-4 bg-white shadow-lg rounded-b-lg mt-2 overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <nav className="flex flex-col space-y-3">
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/"
                    className={`px-4 py-2 block ${isActive('/') ? 'text-[#FF8A3D] font-bold' : 'text-gray-800 hover:text-[#FF8A3D]'}`}
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/packages"
                    className={`px-4 py-2 block ${isActive('/packages') ? 'text-[#FF8A3D] font-bold' : 'text-gray-800 hover:text-[#FF8A3D]'}`}
                    onClick={closeMobileMenu}
                  >
                    Packages
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/#taxi-services"
                    className="px-4 py-2 block text-gray-800 hover:text-[#FF8A3D]"
                    onClick={closeMobileMenu}
                  >
                    Taxi Services
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/#about"
                    className="px-4 py-2 block text-gray-800 hover:text-[#FF8A3D]"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/contact"
                    className={`px-4 py-2 block ${isActive('/contact') ? 'text-[#FF8A3D] font-bold' : 'text-gray-800 hover:text-[#FF8A3D]'}`}
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/blog"
                    className={`px-4 py-2 block ${isActive('/blog') ? 'text-[#FF8A3D] font-bold' : 'text-gray-800 hover:text-[#FF8A3D]'}`}
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}