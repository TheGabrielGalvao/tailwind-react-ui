import {clsx} from 'clsx'
import { ArrowArcRight, CaretRight, IconProps } from 'phosphor-react'
import { HTMLAttributes, ReactNode, useState } from 'react'
import { Text } from './Text'

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode | [],
    open?: boolean
    size?: 'sm' | 'lg'
}

export interface NavbarSectionItemProps extends SidebarProps {
    icon?: React.ComponentType<IconProps> | ReactNode
    label?: string | ReactNode
}

const SidebarRoot = ({children, className, open, size = 'sm', ...props }: SidebarProps) => {
    return (
        <aside className={clsx(
            'h-screen p-5  pt-8 relative duration-300 flex flex-col text-2xl py-6 px-1 bg-white shadow-gray-400 shadow-lg ',
            {
                'w-20': !open,
                'w-56': open
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
        <nav className='flex flex-col w-full items-start justify-between h-full p-1'>
            {children}
        </nav>
    )
}

const SidebarNavSection = ({children, className, open, size = 'sm', ...props }: SidebarProps) => {
    return (
        <ul className='flex flex-col gap-2 w-full'>
            {children}
        </ul>
    )
}

const SidebarNavSectionItem = ({children, className, open, icon, label }: NavbarSectionItemProps) => {
    console.log(open)
    return (
        <li className={clsx(
            'flex items-center w-full text-gray-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer p-3 rounded-lg',
            {
                "justify-center": !open,
                "justify-start gap-4": open,
            },
            className
        )}>
            {icon}
            <Text asChild={false} className={clsx(
                'origin-left duration-200',
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