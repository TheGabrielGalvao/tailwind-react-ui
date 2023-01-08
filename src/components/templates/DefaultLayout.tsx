import { BaseComponentProps } from "../atoms/types"
import { Combobox, Header, SideMenu } from "../molecules"
import bgBlue from '../../assets/img/bg-blue.jpg'
import { AvatarElement, CardElement, HeadingElement, TextElement, TextInputElement, TopbarElement, Variant } from "../atoms"
import { FileSearch, User, UserCircle } from "phosphor-react"
import { DropdownMenuElement } from "../atoms/DropdownMenuElement"

export interface DefaultLayoutProps extends BaseComponentProps {}

export const DefaultLayout = ({children}: DefaultLayoutProps) => {
  return (
    <div className="flex bg-blue-100" >
      <SideMenu />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex w-full h-full p-2">
          <CardElement>
            {children}
          </CardElement>
        </div>
      </div>
    </div>
  )
}