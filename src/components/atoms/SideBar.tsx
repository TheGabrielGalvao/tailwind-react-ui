import {clsx} from 'clsx'
import { HTMLAttributes, ReactNode, useState } from 'react'
import { Text } from './Text'

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode | [],
    open?: boolean
    size?: 'sm' | 'lg'
}

export interface NavbarSectionItemProps extends SidebarProps {
    icon?: ReactNode
    label?: string
}

const SidebarRoot = ({children, className, open, size = 'sm', ...props }: SidebarProps) => {
    return (
        <aside className={clsx(
            'h-screen fixed flex flex-col text-2xl py-6 px-1 bg-white shadow-gray-400 shadow-lg ease-in duration-500',
            {
                'w-16': !open,
                'w-52 items-start justify-start': open
            },
            className
        )}
        {...props}
        >
          {children}
        </aside>
)}

const SidebarNav = ({children, className, open, size = 'sm', ...props }: SidebarProps) => {
    return (
        <nav className='flex flex-col w-full items-start justify-between h-full text-2xl p-1'>
            {children}
        </nav>
    )
}

const SidebarNavSection = ({children, className, open, size = 'sm', ...props }: SidebarProps) => {
    return (
        <ul className='flex flex-col gap-2 text-2xl w-full'>
            {children}
        </ul>
    )
}

const SidebarNavSectionItem = ({children, className, open, icon, label }: NavbarSectionItemProps) => {
    console.log(open)
    return (
        <li className={clsx(
            'flex items-center text-lg w-full text-gray-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer p-3 rounded-lg',
            {
                "justify-center": !open,
                "justify-start gap-4": open,
            },
            className
        )}>
            {icon}
            <Text className={clsx(
                'transition-all duration-300',
                {
                    'hidden': !open,
                    'block': open
                }
            )}>{label}</Text>
        </li>
    )
}



SidebarNav.displayName = 'Sidebar.Nav'
SidebarRoot.displayName = 'Sidebar.Root'
SidebarNavSection.displayName = 'Sidebar.NavSection'
SidebarNavSectionItem.displayName = 'Sidebar.NavSectionItem'

export const Sidebar = {
    Nav: SidebarNav,
    Root: SidebarRoot,
    NavSection: SidebarNavSection,
    NavSectionItem: SidebarNavSectionItem
}