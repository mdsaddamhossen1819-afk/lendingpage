"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contacts", href: "#contact" },
        { name: "Exprience", href: "#experience" }
    ];

    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-black backdrop-blur-md">
            <nav className="mx-auto flex h-[75px] max-w-[1120px] items-center justify-between px-5 lg:px-0">

                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-2"
                >
                    <span className="text-2xl font-bold tracking-tight text-white">
                        S
                    </span>

                    <span className="text-2xl font-bold text-[#ff6959]">
                        W
                    </span>

                    <span className="text-2xl font-bold text-white">
                        E
                    </span>

                    <span className="ml-1 h-6 w-[2px] bg-[#ff6959]" />

                    <span className="text-sm font-medium text-gray-400 transition group-hover:text-white">
                        Software Engineer
                    </span>
                </Link>

                {/* Desktop Menu + Button */}
                <div className="hidden items-center gap-8 md:flex">

                    {/* Menu */}
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[13px] text-gray-300 transition duration-300 hover:text-[#ff6959]"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Hire Me Button */}
                <Link
                    href="#contact"
                    className="rounded-sm bg-[#ff6959] px-5 py-2.5 text-[13px] font-medium text-white transition duration-300 hover:bg-[#ff806f] hover:shadow-lg hover:shadow-[#ff6959]/20"
                >
                    Hire Me
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl text-white md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-gray-700 bg-[#14252f] md:hidden">
                    <div className="flex flex-col items-center gap-5 py-6">

                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-gray-300 transition hover:text-[#ff6959]"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Mobile Hire Me */}
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="rounded-sm bg-[#ff6959] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#ff806f]"
                        >
                            Hire Me
                        </Link>

                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;