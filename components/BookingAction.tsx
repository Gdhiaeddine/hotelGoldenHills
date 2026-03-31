'use client'
import { raleway } from '@/app/font';
import { Handbag } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const BookingAction = () => {
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
        <nav className={`headerNav fixed top-3 right-0 px-4 py-2 z-20 transition-all duration-500 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            {/* Right — Réservez */}
            <Link href="/booking">
                <div className={`flex gap-2 rounded-full p-3 items-center text-white mr-8 transition-all duration-500 cursor-pointer ${scrolled ? "bg-[#0c0a06]/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
                    <span className={`${raleway.className} text-sm font-medium`}>Booking</span>
                    <Handbag size={14} />
                </div>
            </Link>
        </nav>
    )
}

export default BookingAction