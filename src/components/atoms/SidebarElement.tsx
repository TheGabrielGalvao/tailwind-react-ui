import {clsx} from 'clsx'
import { ArrowArcRight, CaretRight, IconProps } from 'phosphor-react'
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { NavLink, useLocation, useMatch } from 'react-router-dom'
import { Page } from '../../interfaces/ui/navigation'
import { CustomNavLink } from './CustomNavLink'
import { TextElement } from './TextElement'
import { BaseComponentProps } from './types'

export interface SidebarElementProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode | [],
    open?: boolean
    size?: 'sm' | 'lg'
}

export interface NavbarSectionItemProps extends SidebarElementProps {
    icon?: React.ComponentType<IconProps> | ReactNode
    label?: string | ReactNode
}

export interface NavbarSectionItemRouteProps extends BaseComponentProps {
    itemMenu?: Page
    open?: boolean
}

const SidebarRoot = ({children, className, open, size = 'sm', ...props }: SidebarElementProps) => {
    return (
        <aside className={clsx(
            'h-screen p-5  pt-0 relative duration-300 flex flex-col text-2xl py-0 px-1 bg-white shadow-gray-400 shadow-lg border-r border-r-grey-400',
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

const SidebarNav = ({children, className, open, size = 'sm', ...props }: SidebarElementProps) => {
    return (
        <nav className='flex flex-col w-full items-start justify-between h-full p-1'>
            {children}
        </nav>
    )
}

const SidebarNavSection = ({children, className, open, size = 'sm', ...props }: SidebarElementProps) => {
    return (
        <ul className='flex flex-col gap-2 w-full'>
            {children}
        </ul>
    )
}

const SidebarNavSectionItem = ({className, open, icon, label }: NavbarSectionItemProps) => {
    return (
        <li className={clsx(
            'flex items-center w-full text-gray-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer p-3 rounded-lg',
            {
                "justify-center": !open,
                "justify-start gap-4": open,
            },
            className
        )}>
            <>
                {icon}
                <TextElement asChild={false} className={clsx(
                    'origin-left duration-200',
                    {
                        'hidden': !open,
                        'block': open
                    }
                )}>{label}</TextElement>
            </>
        </li>
    )
}

const SidebarNavSectionItemRoute = ({className, open, itemMenu }: NavbarSectionItemRouteProps) => {

    
    const match = itemMenu?.route ? useMatch(itemMenu?.route) : null
    const location = useLocation()
    const [active, setActive] = useState(false)

    useEffect(
        () => {
            setActive(location.pathname === match?.pathname)
        }
    )
    return (
        <li className={clsx(
            'flex items-center w-full text-gray-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer rounded-lg',
            {
                "justify-center": !open,
                "justify-start gap-4": open,
                "text-white bg-blue-500" : active,
                "text-grey-500 bg-transparent" : !active
            },
            className
        )}>
            
            <NavLink to={itemMenu?.route || ""} end={itemMenu?.exact} className={clsx(
                'flex w-full items-center p-3 rounded-lg',
                {
                    "justify-center": !open,
                    "justify-start gap-4": open,
                }
            )}>
                    {itemMenu?.icon}
                    <TextElement asChild={false} className={clsx(
                        'origin-left duration-200',
                        {
                            'hidden': !open,
                            'block': open
                        }
                    )}>
                        {itemMenu?.label}
                    </TextElement>
            </NavLink>
            
        </li>
    )
}



SidebarNav.displayName = 'Sidebar.Nav'
SidebarRoot.displayName = 'Sidebar.Root'
SidebarNavSection.displayName = 'Sidebar.NavSection'
SidebarNavSectionItem.displayName = 'Sidebar.NavSectionItem'
SidebarNavSectionItemRoute.displayName = 'Sidebar.NavSectionItemRoute'

export const SidebarElement = {
    Nav: SidebarNav,
    Root: SidebarRoot,
    NavSection: SidebarNavSection,
    NavSectionItem: SidebarNavSectionItem,
    NavSectionItemRoute: SidebarNavSectionItemRoute
}