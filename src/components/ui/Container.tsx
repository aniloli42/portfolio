import cn from '@/utils/cn'
import { FC, PropsWithChildren } from 'react'
import { ClassNameValue } from 'tailwind-merge'

type ContainerProps = PropsWithChildren & {
  className?: ClassNameValue
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={cn('container mx-auto px-4 md:px-8 lg:px-12', className)}>
      {children}
    </div>
  )
}

export default Container
