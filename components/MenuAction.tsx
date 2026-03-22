'use client'
import { raleway } from '@/app/font';
import { Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react'

const MenuAction = () => {
    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const [openMenu, setOpenMenu] = useState(false)
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
        <nav className={`headerNav flex justify-between items-center fixed top-3 px-4 py-2 z-50 transition-all duration-500 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className={`flex gap-2 items-center text-white ml-8 transition-all duration-500 p-3 rounded-full cursor-pointer ${scrolled ? "bg-[#0c0a06]/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
                <Menu size={14} />
                <span className={`${raleway.className} text-sm font-medium`}>Menu</span>
            </div>
        </nav>

    )
}

export default MenuAction