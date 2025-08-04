import cn from '@/utils/cn'
import { FC, PropsWithChildren } from 'react'

type NavItemProps = PropsWithChildren & { className?: string }

const NavItem: FC<NavItemProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>
}

export default NavItem
