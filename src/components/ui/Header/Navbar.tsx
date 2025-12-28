import NavItem from './NavItem'

interface NavBarProps {
  isMobileMenuOpen?: boolean
  onItemClick?: () => void
  mobile?: boolean
}

const NavBar = ({
  isMobileMenuOpen = false,
  onItemClick,
  mobile = false
}: NavBarProps) => {
  if (mobile) {
    return (
      <nav
        className={`absolute top-full right-0 left-0 overflow-hidden border-gray-700 bg-gray-800 shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? 'max-h-125 border-b opacity-100'
            : 'max-h-0 opacity-0'
        }`}
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col items-center gap-4 p-4">
          <NavItem href="#home" onClick={onItemClick}>
            Home
          </NavItem>
          <NavItem href="#about" onClick={onItemClick}>
            About
          </NavItem>
          <NavItem href="#experience" onClick={onItemClick}>
            Experience
          </NavItem>
          <NavItem href="#education" onClick={onItemClick}>
            Education
          </NavItem>
          <NavItem href="#skills" onClick={onItemClick}>
            Skills
          </NavItem>
          <NavItem href="#projects" onClick={onItemClick}>
            Projects
          </NavItem>
          <NavItem href="#awards" onClick={onItemClick}>
            Recognition
          </NavItem>
          <NavItem href="#community" onClick={onItemClick}>
            Community
          </NavItem>
          <NavItem href="#contact" onClick={onItemClick}>
            Contact
          </NavItem>
        </div>
      </nav>
    )
  }

  return (
    <nav
      className="hidden lg:flex lg:flex-row lg:gap-8"
      aria-label="Desktop navigation menu"
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
