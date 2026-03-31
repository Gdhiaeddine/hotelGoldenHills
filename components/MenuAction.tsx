'use client'

import { cormorant, raleway } from '@/app/font'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface MenuActionProps {
  onClick?: () => void
}

const MenuAction = ({ onClick }: MenuActionProps) => {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const lastScrollY = useRef(0)

  const navPages = [
    { name: 'Home', url: '/' },
    { name: 'About us', url: '/hotel' },
    { name: 'Rooms', url: '/accommodation' },
    { name: 'Wellness', url: '/wellness-spa' },
    { name: 'Gastronomy', url: '/gastro' },
    { name: 'Events', url: '/events' },
    { name: 'Contact', url: '/contact' }
  ]

  // ✅ Navbar scroll behavior
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY

      setVisible(current < lastScrollY.current || current < 20)
      setScrolled(current > 20)

      lastScrollY.current = current
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ✅ Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = openMenu ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [openMenu])

  return (
    <>
      {/* ✅ NAVBAR */}
      <nav
        className={`headerNav flex justify-between items-center fixed top-3 px-4 py-2 z-50 transition-all duration-500 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div
          onClick={() => setOpenMenu(true)}
          className={`flex gap-2 items-center text-white ml-8 transition-all duration-500 p-3 rounded-full cursor-pointer ${
            scrolled
              ? 'bg-[#0c0a06]/90 backdrop-blur-md shadow-md'
              : 'bg-transparent'
          }`}
        >
          <Menu size={14} />
          <span className={`${raleway.className} text-sm font-medium`}>
            Menu
          </span>
        </div>
      </nav>

      {/* ✅ FULLSCREEN MENU */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/50 z-50"
        >
          {/* Prevent closing when clicking inside */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full flex flex-col justify-center items-center"
          >
            {/* Background Image */}
            <Image
              src="/assets/hotelOutside.jpg"
              alt="Navigation background"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Close button */}
            <button
              onClick={() => setOpenMenu(false)}
              className={`${raleway.className} absolute top-8 right-10 z-20 text-white/60 hover:text-amber-400 transition-colors duration-300 tracking-widest uppercase text-sm cursor-pointer`}
            >
              Close ✕
            </button>

            {/* Navigation Links */}
            <div className="relative z-20 flex flex-col gap-6 text-center">
              {navPages.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  onClick={() => setOpenMenu(false)}
                >
                  <h1
                    className={`${cormorant.className} text-white text-3xl font-bold tracking-widest hover:text-amber-400 transition-colors duration-300`}
                  >
                    {item.name}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MenuAction