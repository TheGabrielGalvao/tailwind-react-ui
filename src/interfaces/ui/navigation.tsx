import { IconProps } from "phosphor-react/src/lib";
import { ReactNode } from "react";

export interface Page {
    id: number
    name: string
    label?: string
    element?: ReactNode
    icon?: React.ComponentType<IconProps> | ReactNode
    position?: EPositionItemMenu
    route?: string
    order?: number
    exact?: boolean
    private?: boolean
    routeContext?: string
}

export interface Module {
    id: number | string
    name: string
    label?: string
    icon?: React.ComponentType<IconProps>
    route: string
    element?: ReactNode
    pages?: Page[]
    exact?: boolean
    menuposition?: EPositionItemMenu
    order?: number
    initialPage?: ReactNode
    private: boolean
    initialRoute?: string
}

export enum EPositionItemMenu {
  TOP = "top",
  MIDDLE = "middle",
  BOTTOM = "bottom",
}

export interface SimpleNavigationProps {
  navigation: Page[]
}

export interface NestedNavigationProps {
  navigation: Module[]
}