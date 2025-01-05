"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="text-xl font-bold">
                        <img src="/codecube-logo.png" alt="Logo" className="h-16 w-auto"/>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-600 hover:text-gray-900"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-md">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-gray-600 hover:text-gray-900"
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Header;