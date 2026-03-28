'use client'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import MenuAction from './MenuAction'
import BookingAction from './BookingAction'
import Footer from './Footer'

const LayoutHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Nécessaire pour éviter l'erreur SSR avec createPortal
  useEffect(() => {
    setMounted(true)
  }, [])

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const handleOpenMenu = () => setIsMenuOpen(true)
  const handleCloseMenu = () => setIsMenuOpen(false)

  return (
    <>
      <MenuAction onClick={handleOpenMenu} />
      <BookingAction />

      {/* Portal monté directement dans document.body — aucun parent ne peut le bloquer */}
      {mounted && createPortal(
        <div
          style={{ transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)' }}
          className="fixed inset-0 z-[9999] transition-transform duration-700 ease-in-out"
        >
          <Footer fromMenu={true} onClose={handleCloseMenu} />
        </div>,
        document.body
      )}
    </>
  )
}

export default LayoutHeader