import { HTMLAttributes, ReactNode, useState } from 'react'
import clsx from "clsx"
import { IconProps } from 'phosphor-react'

export interface TopbarElementProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode | [],
  open?: boolean
  size?: 'sm' | 'lg'
}

export interface TopbarSectionItemProps extends TopbarElementProps {
  icon?: React.ComponentType<IconProps> | ReactNode
  label?: string | ReactNode
}

export const TopbarRoot = ({children, className, open, size = 'sm', ...props }: TopbarElementProps) => {
  return (
    <div className="
      relative
      w-full
      flex flex-wrap
      items-center
      justify-between
      py-4
      px-4
      bg-gray-100
      text-gray-500
      hover:text-gray-700
      focus:text-gray-700
      shadow-lg
      navbar navbar-expand-lg navbar-light
    ">
     {children} 
</div>
  )
}

const TopbarNav = ({children, className, open, size = 'sm', ...props }: TopbarElementProps) => {
  return (
      <nav className='flex w-full items-center justify-between h-full'>
          {children}
      </nav>
  )
}

const TopbarNavSection = ({children, className, open, size = 'sm', ...props }: TopbarElementProps) => {
  return (
      <ul className='flex justify-end items-center gap-2 w-full'>
          {children}
      </ul>
  )
}

const TopbarNavSectionItem = ({className, open, icon, label }: TopbarSectionItemProps) => {
  console.log(open)
  return (
      <li className={clsx(
          'flex items-center text-gray-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer p-3 rounded-lg',
          {
              "justify-center": !open,
              "justify-start gap-4": open,
          },
          className
      )}>
          <>
              {icon}
              <Text asChild={false} className={clsx()}>{label}</Text>
          </>
      </li>
  )
}

TopbarNav.displayName = 'Topbar.Nav'
TopbarRoot.displayName = 'Topbar.Root'
TopbarNavSection.displayName = 'Topbar.NavSection'
TopbarNavSectionItem.displayName = 'Topbar.NavSectionItem'

export const TopbarElement = {
    Nav: TopbarNav,
    Root: TopbarRoot,
    NavSection: TopbarNavSection,
    NavSectionItem: TopbarNavSectionItem
}