import { BaseComponentProps } from "../atoms/types"
import { Combobox, SideMenu } from "../molecules"
import bgBlue from '../../assets/img/bg-blue.jpg'
import { TextInputElement, TopbarElement } from "../atoms"
import { FileSearch, User, UserCircle } from "phosphor-react"

export interface DefaultPageProps extends BaseComponentProps {}

export const DefaultPage = ({children}: DefaultPageProps) => {
  return (
    <div className="flex bg-blue-100">
      <SideMenu />
      <div className="flex flex-col w-full gap-12">
        <header className="flex w-full px-14 py-2 bg-white justify-between border-l border-l-blue-100">
            <Combobox />
            <UserCircle size={50} />
        </header>
        <div className="flex w-full h-full p-6">
          <div className="flex w-full bg-white p-2 rounded-2xl overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}