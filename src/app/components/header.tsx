'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import ShoppingCart from './Card';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full bg-white shadow-md">
            <div className="flex justify-between items-center mx-auto max-w-screen-2xl p-4 md:px-8">
                {/* Logo */}
                <h1 className="text-xl font-bold">Your Logo</h1>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl focus:outline-none"
                    aria-label="Toggle Mobile Menu"
                >
                    {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>

                {/* Navigation Links for Desktop */}
                <nav className="hidden md:flex justify-center flex-grow">
                    <ul className="flex space-x-8 font-medium">
                        <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
                        <li><Link href="/shop" className="hover:text-gray-600">Shop</Link></li>
                        <li><Link href="/blog" className="hover:text-gray-600">Blog</Link></li>
                        <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="flex gap-3 md:space-x-6 items-center">
                    <Link href='/myaccount'>
                        <FaRegUser className="cursor-pointer" size={20} />
                    </Link>
                    <FiSearch className="cursor-pointer" size={22} />
                    <IoMdHeartEmpty className="cursor-pointer" size={25} />
                    <div className="relative">
                        <ShoppingCart />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <nav
                className={`fixed top-0 left-0 w-full h-full bg-white z-20 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'hidden'}`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-bold">Your Logo</h1>
                    <button
                        onClick={toggleMenu}
                        className="text-2xl focus:outline-none"
                        aria-label="Close Mobile Menu"
                    >
                        <HiOutlineX />
                    </button>
                </div>
                <ul className="flex flex-col items-center space-y-6 py-8 text-lg font-medium">
                    <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
                    <li><Link href="/shop" className="hover:text-gray-600">Shop</Link></li>
                    <li><Link href="/blog" className="hover:text-gray-600">Blog</Link></li>
                    <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
