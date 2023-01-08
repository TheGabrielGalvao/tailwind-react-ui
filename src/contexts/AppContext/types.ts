import { ReactNode } from "react"
import { Page } from "../../interfaces/ui/navigation"

export interface IAppContextData {
  navigation?: Page[]
  // handleRedirect: (route: string) => void
}

export interface IAppProviderProps {
  children?: ReactNode
}