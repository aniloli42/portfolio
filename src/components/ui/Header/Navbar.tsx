import NavItem from './NavItem'

interface NavBarProps {
  isMobileMenuOpen?: boolean
}

const NavBar = ({ isMobileMenuOpen = false }: NavBarProps) => {
  return (
    <nav
      className={`${
        isMobileMenuOpen
          ? 'absolute top-full right-0 left-0 flex flex-col gap-4 border-b border-gray-700 bg-gray-800 p-4 shadow-lg'
          : 'hidden lg:flex lg:flex-row lg:gap-8'
      }`}
      aria-label="Navigation menu"
    >
      <NavItem href="#home">Home</NavItem>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#experience">Experience</NavItem>
      <NavItem href="#education">Education</NavItem>
      <NavItem href="#skills">Skills</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#awards">Recognition</NavItem>
      <NavItem href="#community">Community</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </nav>
  )
}

export default NavBar
