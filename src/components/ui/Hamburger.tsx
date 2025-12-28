'use client'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

interface HamBurgerProps {
  isOpen: boolean
  onClick: () => void
}

const HamBurger = ({ isOpen, onClick }: HamBurgerProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded p-2 text-gray-300 transition-colors hover:bg-gray-700 md:hidden"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <IoClose className="h-8 w-8" />
      ) : (
        <GiHamburgerMenu className="h-8 w-8" />
      )}
    </button>
  )
}

export default HamBurger
