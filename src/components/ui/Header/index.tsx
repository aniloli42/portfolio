"use client";

import { FC, useState } from 'react'
import Container from '../Container'
import NavBar from './Navbar'
import HamBurger from '../Hamburger'
import BrandTitle from '../BrandTitle'

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-b-gray-500 relative">
      <Container className="flex items-center justify-between">
        {/*Brand Title  */}
        <BrandTitle />

        <div className="flex items-center gap-4">
          {/* Nav Links */}
          <NavBar isMobileMenuOpen={isMobileMenuOpen} />

          {/* Mobile HamBurger */}
          <HamBurger isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </Container>
    </div>
  )
}

export default Header
