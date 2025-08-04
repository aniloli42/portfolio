import { FC } from 'react'
import Container from '../Container'
import NavBar from './Navbar'
import HamBurger from '../Hamburger'
import ThemeToggler from '../ThemeToggler'
import BrandTitle from '../BrandTitle'

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-b-gray-500">
      <Container className="flex items-center justify-between">
        {/*Brand Title  */}
        <BrandTitle />

        <div className="flex items-center gap-4">
          {/* Nav Links */}
          <NavBar />

          {/* Mobile HamBurger */}
          <HamBurger />

          {/* Theme Toggler */}
          <ThemeToggler />
        </div>
      </Container>
    </div>
  )
}

export default Header
