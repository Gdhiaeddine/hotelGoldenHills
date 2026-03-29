'use client'
import { useState, useEffect } from 'react'
import MenuAction from './MenuAction'
import BookingAction from './BookingAction'

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
    </>
  )
}

export default LayoutHeader