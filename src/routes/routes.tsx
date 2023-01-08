import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CustomRoute } from "./CustomRoute";
import {Module, Page} from '../interfaces/ui/navigation'
import { filter } from "lodash";
import { simpleNavigation } from "../util/constants/navigation";
import { useAuth } from "../contexts/AuthContext";
import { GenericPage } from "../components/pages/GenericPage";
import { Home } from "../components/pages/Home";

interface RouteProps {
    config: Page[]
}

export const AppRoutes = () => {
    const { signed } = useAuth()
    return (
        signed 
        ? <PrivateRoutes />
        : <PublicRoutes />
    )
}


export const PrivateRoutes = () => {
    const routes: Page[] = filter(simpleNavigation, (item: Page) => (item.private === true ))
    return (
        <Routes>
            {routes?.map((item) => (
                <Route path={item.route} element={<CustomRoute />}>
                    <Route path={item.route} element={item.element} />
                </Route>
            ))}
        </Routes>
    )
}


export const PublicRoutes = () => {
    const routes: Page[] = filter(simpleNavigation, (item: Page) => (item.private === false ))
    return (
        <Routes>
            <Route path="/" element={<CustomRoute />}>
                <Route path="/" element={<Home />} />
            </Route>
            {routes?.map((item) => (
                <Route key={item.id} path={item.route} element={item.element} />    
            ))}
        </Routes>
    )
}
    
