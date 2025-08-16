import NavItem from './NavItem'

const NavBar = ({}) => {
  return (
    <nav
      className="flex flex-col lg:flex-row lg:gap-8 gap-4"
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
