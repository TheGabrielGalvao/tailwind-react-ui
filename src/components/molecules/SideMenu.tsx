import clsx from "clsx"
import { CaretRight, Envelope, TiktokLogo } from "phosphor-react"
import { useState } from "react"
import { EPositionItemMenu } from "../../interfaces/ui/navigation"
import { getMenuByPosition } from "../../util/helpers/ui"
import { Logo } from "../atoms/Logo"
import { Sidebar } from "../atoms/SideBar"
import { Text } from "../atoms/Text"
import { TextInput } from "../atoms/TextInput"

export interface SideMenuProps {
}

// export interface NavbarSectionItemProps extends SidebarProps {
//   icon?: ReactNode
//   label?: string
// }

export const SideMenu = () => {
  const [open, setOpen] = useState(false)
  const middleNav = getMenuByPosition(EPositionItemMenu.MIDDLE)
  const bottomNav = getMenuByPosition(EPositionItemMenu.BOTTOM)
  return (
    <Sidebar.Root open={open}>
      <Sidebar.Nav open={open}>
            <CaretRight 
              className={clsx(
                'absolute cursor-pointer -right-3 top-9  bg-blue-500 text-white border-2 rounded-full',
                {
                  'rotate-180': open
                }
              )}
              size={25}  
              onClick={() => setOpen(!open)}
            />
            <Sidebar.NavSection open={open} className="flex gap-x-4 items-center">
                <Sidebar.NavSectionItem 
                  open={open} 
                  className=' hover:bg-transparent hover:text-gray-400' 
                  icon={
                    <Logo className={clsx(
                      'cursor-pointer duration-500 text-white',
                      {
                        'rotate-[360deg]': open
                      }
                    )}>
                      <TiktokLogo />
                    </Logo>
                  } 
                  label={<Text><h1 className={clsx(
                    'text-black origin-left text-md duration-200',
                    {
                      'scale-0': !open
                    }
                  )}>Sistema</h1></Text>} 
                />
            </Sidebar.NavSection>

            <Sidebar.NavSection open={open}>
              {/* <TextInput.Root>
                <TextInput.Icon>
                  <Envelope className="cursor-pointer" onClick={() => setOpen(!open)}/>
                </TextInput.Icon>
                <TextInput.Input placeholder= "Pesquisar" />
              </TextInput.Root> */}
                {middleNav.map(
                    item => (
                      <Sidebar.NavSectionItem open={open} icon={item.icon} label={<Text>{item.label}</Text>} />
                    )
                  )
                }
                
            </Sidebar.NavSection>

            <Sidebar.NavSection open={open}>
                  {bottomNav.map(
                    item => (
                      <Sidebar.NavSectionItem open={open} icon={item.icon} label={<Text>{item.label}</Text>} />
                    )
                  )
                }
            </Sidebar.NavSection>
        </Sidebar.Nav>
    </Sidebar.Root>
  )
}