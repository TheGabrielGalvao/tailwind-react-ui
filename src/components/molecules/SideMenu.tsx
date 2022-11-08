import { AddressBook, CurrencyDollarSimple, Gear, HouseSimple, TiktokLogo } from "phosphor-react"
import { ReactNode } from "react"
import { Logo } from "../atoms/Logo"
import { Sidebar } from "../atoms/SideBar"

export interface SideMenuProps {
  open?: boolean
}

// export interface NavbarSectionItemProps extends SidebarProps {
//   icon?: ReactNode
//   label?: string
// }

export const SideMenu = ({open}: SideMenuProps) => {
  return (
    <Sidebar.Root open={open}>
      <Sidebar.Nav open={open}>
            <Sidebar.NavSection open={open}>
                <Sidebar.NavSectionItem 
                  open={open} 
                  className='text-lg hover:bg-transparent hover:text-gray-400' 
                  icon={
                    <Logo className="">
                      <TiktokLogo className='text-white' />
                    </Logo>
                  } 
                  label="Sistema" 
                />
            </Sidebar.NavSection>

            <Sidebar.NavSection open={open}>
                <Sidebar.NavSectionItem open={open} icon={<HouseSimple />} label="Home" />
                <Sidebar.NavSectionItem open={open} icon={<AddressBook />} label="Contatos" />
                <Sidebar.NavSectionItem open={open} icon={<CurrencyDollarSimple />} label="Financeiro" />
            </Sidebar.NavSection>

            <Sidebar.NavSection open={open}>
                <Sidebar.NavSectionItem open={open} icon={<Gear />} label="Ajustes" />
            </Sidebar.NavSection>
        </Sidebar.Nav>
    </Sidebar.Root>
  )
}