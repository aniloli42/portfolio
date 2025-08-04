import NavItem from './NavItem'

const NavBar = ({}) => {
  return (
    <nav
      className="flex flex-col lg:flex-row lg:gap-4 gap-2"
      aria-label="Navigation menu"
    >
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Skills</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Experience</NavItem>
      <NavItem>Education</NavItem>
      <NavItem>Awards & Involvements</NavItem>
      <NavItem>Contact</NavItem>
    </nav>
  )
}

export default NavBar
