import { IconProps } from "phosphor-react/src/lib";
import { ReactNode } from "react";
import { RouteComponentProps } from "react-router";

export interface Page {
    id: number | string
    name: string
    label: string
    icon?: React.ComponentType<IconProps> | ReactNode
    path?: string
    route?: string
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined
    order?: number
    visible?: boolean
    exact?: boolean
    position?: EPositionItemMenu
}

export interface Module {
    id: number | string
    name: string
    label?: string
    icon?: React.ComponentType<IconProps>
    route: string
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined
    pages?: Page[]
    exact?: boolean
    menuposition?: EPositionItemMenu
    order?: number
    initialPage?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined
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