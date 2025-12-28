'use client'

import { FC, useState, useEffect, useRef } from 'react'
import Container from '../Container'
import NavBar from './Navbar'
import HamBurger from '../Hamburger'
import BrandTitle from '../BrandTitle'

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <div
      ref={headerRef}
      className="relative flex items-center justify-between border-b border-b-gray-500 px-4 py-3"
    >
      <Container className="flex items-center justify-between">
        {/*Brand Title  */}
        <BrandTitle />

        <div className="flex items-center gap-4">
          {/* Desktop Nav Links */}
          <NavBar isMobileMenuOpen={false} onItemClick={closeMobileMenu} />

          {/* Mobile HamBurger */}
          <HamBurger isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      <NavBar
        isMobileMenuOpen={isMobileMenuOpen}
        onItemClick={closeMobileMenu}
        mobile
      />
    </div>
  )
}

export default Header
