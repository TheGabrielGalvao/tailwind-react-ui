import clsx from "clsx"
import { useEffect, useState } from "react"
import { NavLink, useLocation, useMatch } from "react-router-dom"
import { Module, Page } from "../../interfaces/ui/navigation"
import { BaseComponentProps } from "./types"

export interface CustonNavLinkProps extends BaseComponentProps {
    Link: Page
}


export const CustomNavLink = ({Link, className, children} : CustonNavLinkProps) => {
    // const match = useMatch(Link.route)
    // const location = useLocation()
    const [active, setActive] = useState(false)

    // useEffect(
    //     () => {
    //         setActive(location.pathname === match?.pathname)
    //     }
    // )
    
    return (
            <NavLink className={clsx(
              {
                "text-white bg-blue-500" : active,
                "text-grey-500 bg-transparent" : !active
              },
              className
            )} to={Link.route} end={Link.exact}>
                {children}
            </NavLink>
    )
}