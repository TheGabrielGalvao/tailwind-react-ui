import { simpleNavigation } from '../../constants/navigation';
import { filter } from "lodash"
import { EPositionItemMenu } from "../../../interfaces/ui/navigation"

export const getMenuByPosition = (position: EPositionItemMenu) => {
    const data = filter(simpleNavigation, {position: position})

    return data
}