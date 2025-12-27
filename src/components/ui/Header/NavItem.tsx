import cn from '@/utils/cn'
import { FC, PropsWithChildren } from 'react'

type NavItemProps = PropsWithChildren & { 
  className?: string;
  href?: string;
}

const NavItem: FC<NavItemProps> = ({ children, className, href = '#' }) => {
  return (
    <a 
      href={href}
      className={cn(
        'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium',
        className
      )}
    >
      {children}
    </a>
  )
}

export default NavItem
