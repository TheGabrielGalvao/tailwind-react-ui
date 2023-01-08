import { createContext, useContext } from "react"
import { IAppContextData, IAppProviderProps } from "./types"
import {simpleNavigation} from '../../util/constants/navigation'
import { Route, Routes } from "react-router-dom"
import { filter } from "lodash"
import { ERouteContext, Page } from "../../interfaces/ui/navigation"
import { DefaultLayout } from "../../components/templates/DefaultLayout"
import { OnBoardingLayout } from "../../components/templates"
import { useAuth } from "../AuthContext"
import { CustomRoute } from "../../routes/CustomRoute"
import { AppRoutes } from "../../routes/routes"

export const AppContext = createContext<IAppContextData>({} as IAppContextData)

export const AppProvider = ({children}: IAppProviderProps) => {
    const commonNavigation = filter(simpleNavigation, {routeContext: ERouteContext.COMMON })
    const onboardingNavigation = filter(simpleNavigation, {routeContext: ERouteContext.ONBOARDING })
    const {signed} = useAuth()
    return (
        <AppContext.Provider value={{}}>
                {
                    !signed
                    ?      
                        <OnBoardingLayout headerText='Sistema de Gestão' secondaryText='Faça login e comece a usar!'>
                           <AppRoutes />
                        </OnBoardingLayout>  
                    :   
                        <DefaultLayout>
                            <AppRoutes />
                        </DefaultLayout> 
                              
                }
        </AppContext.Provider>
    )
}


export const useRoute = () => {
    const context = useContext(AppContext)
    return context
}
