import cn from '@/utils/cn'
import { FC, PropsWithChildren } from 'react'

type NavItemProps = PropsWithChildren & {
  className?: string
  href?: string
  onClick?: () => void
}

const NavItem: FC<NavItemProps> = ({
  children,
  className,
  href = '#',
  onClick
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'font-medium text-gray-300 transition-colors duration-200 hover:text-blue-400',
        className
      )}
    >
      {children}
    </a>
  )
}

export default NavItem
