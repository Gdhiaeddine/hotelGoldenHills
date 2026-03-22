'use client'
import { Handbag, Menu } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { raleway } from '../app/font'
import Link from 'next/link'

const FixedAction = () => {
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const current = window.scrollY;
            setVisible(current < lastScrollY.current || current < 20);
            setScrolled(current > 20);
            lastScrollY.current = current;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`headerNav w-full flex justify-between items-center fixed top-3 px-4 py-2 z-50 transition-all duration-500 ${visible ? "translate-y-0" : "-translate-y-full"}`}>

            {/* Left — Menu */}
            <div className={`flex gap-2 items-center text-white ml-8 transition-all duration-500 p-3 rounded-full cursor-pointer ${scrolled ? "bg-[#0c0a06]/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
                <Menu size={14} />
                <span className={`${raleway.className} text-sm font-medium`}>Menu</span>
            </div>

            {/* Right — Réservez */}
            <Link href="/#booking">
                <div className={`flex gap-2 rounded-full p-3 items-center text-white mr-8 transition-all duration-500 cursor-pointer ${scrolled ? "bg-[#0c0a06]/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
                    <span className={`${raleway.className} text-sm font-medium`}>Réservez</span>
                    <Handbag size={14} />
                </div>
            </Link>


        </nav>

    )
}

export default FixedAction