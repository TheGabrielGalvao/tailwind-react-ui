import { simpleNavigation } from '../../constants/navigation';
import { filter, find } from "lodash"
import { EPositionItemMenu } from "../../../interfaces/ui/navigation"

export const getMenuByPosition = (position: EPositionItemMenu) => {
    const data = filter(simpleNavigation, {position: position})

    return data
}

export const getRouteByFilter = (path: string) => {
    const route = find(simpleNavigation, {route: path})
    return route
}