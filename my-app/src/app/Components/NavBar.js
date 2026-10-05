"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Calculator", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "News & Blog", href: "#" },
    { name: "Meet The Team", href: "#" }
];

export default function Navbar({ pageType = "home" }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        const handleResize = () => {
            if (mediaQuery.matches) {
                setIsMenuOpen(false);
            }
        };
        mediaQuery.addEventListener('change', handleResize);
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    return (
        <nav className="bg-transparent text-white px-4 sm:px-6 py-3 relative z-30">
            <div className="hidden lg:flex justify-center items-center gap-6">
                <ul className="flex space-x-6 text-sm">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={`hover:underline cursor-pointer transition-all duration-200 ${pathname === link.href ? 'underline font-semibold' : ''
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="bg-white text-[#2E3A6A] text-sm px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                    <Link href="#">Client Portal</Link>
                </button>
            </div>

            <div className="lg:hidden flex justify-between items-center">
                <button className="bg-white text-[#2E3A6A] text-sm px-3 py-1 rounded">
                    <Link href="#">Client Portal</Link>
                </button>
                <button
                    className="text-white p-2"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white bg-opacity-50 backdrop-blur-sm z-50 p-6 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-end mb-6">
                    <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <ul className="flex flex-col space-y-4 text-black text-sm">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={`hover:underline cursor-pointer block ${pathname === link.href ? 'underline font-semibold' : ''
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}