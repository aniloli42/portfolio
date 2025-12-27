"use client";

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

interface HamBurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamBurger = ({ isOpen, onClick }: HamBurgerProps) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <IoClose className="h-8 w-8" />
      ) : (
        <GiHamburgerMenu className="h-8 w-8" />
      )}
    </button>
  );
};

export default HamBurger;
