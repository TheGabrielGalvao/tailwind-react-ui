import clsx from "clsx"
import { Alien, CaretRight, TiktokLogo } from "phosphor-react"
import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { EPositionItemMenu } from "../../interfaces/ui/navigation"
import { getMenuByPosition } from "../../util/helpers/ui"
import { LogoElement, SidebarElement, TextElement } from "../atoms"

export interface SideMenuProps {}

export const SideMenu = () => {
  const [open, setOpen] = useState(false)
  const middleNav = getMenuByPosition(EPositionItemMenu.MIDDLE)
  const bottomNav = getMenuByPosition(EPositionItemMenu.BOTTOM)
  const {handleSignOut} = useAuth()
  return (
    <SidebarElement.Root open={open}>
      <SidebarElement.Nav open={open}>
            <CaretRight 
              className={clsx(
                'absolute cursor-pointer -right-3 top-7  bg-blue-500 text-white border-2 rounded-full',
                {
                  'rotate-180': open
                }
              )}
              size={25}  
              onClick={() => setOpen(!open)}
            />
            <SidebarElement.NavSection open={open} className="flex gap-x-4 items-center">
                <SidebarElement.NavSectionItem 
                  open={open} 
                  className=' hover:bg-transparent hover:text-gray-400' 
                  icon={
                    <LogoElement className={clsx(
                      'cursor-pointer duration-500 text-white',
                      {
                        'rotate-[360deg]': open
                      }
                    )}>
                      <Alien onClick={handleSignOut} />
                    </LogoElement>
                  } 
                  label={<TextElement><h1 className={clsx(
                    'text-black origin-left text-md duration-200',
                    {
                      'scale-0': !open
                    }
                  )}>Sistema</h1></TextElement>} 
                />
            </SidebarElement.NavSection>

            <SidebarElement.NavSection open={open}>
              {/* <TextInput.Root>
                <TextInput.Icon>
                  <Envelope className="cursor-pointer" onClick={() => setOpen(!open)}/>
                </TextInput.Icon>
                <TextInput.Input placeholder= "Pesquisar" />
              </TextInput.Root> */}
                {middleNav.map(
                    item => (
                      <SidebarElement.NavSectionItemRoute open={open} itemMenu={item} />
                    )
                  )
                }
                
            </SidebarElement.NavSection>

            <SidebarElement.NavSection open={open}>
                  {bottomNav.map(
                    item => (
                      <SidebarElement.NavSectionItemRoute open={open} itemMenu={item} />
                    )
                  )
                }
            </SidebarElement.NavSection>
        </SidebarElement.Nav>
    </SidebarElement.Root>
  )
}