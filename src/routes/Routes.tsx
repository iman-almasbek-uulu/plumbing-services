import { Route , Routes} from "react-router-dom";
import AboutPage from "../pages/aboutPage/AboutPage";
import HomePage from "../pages/homePage/HomePage";
import ServicePage from "../pages/servicesPage/ServicePage";
import { ReactNode } from "react";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

interface RouteData {
    id: number;
    path: string;
    element: ReactNode
}

const routesData: RouteData[] = [
    {
        id:1,
        path: "/",
        element: <HomePage />
    },
    {
        id:2,
        path: "/service",
        element: <ServicePage />
    },
    {
        id:3,
        path: "/about",
        element: <AboutPage />
    },
    {
        id:3,
        path: "*",
        element: <NotFoundPage />
    },
]


const AppRoutes = () => {
    return (
        <Routes>
            {routesData.map(el => (
                <Route key={el.id} path={el.path} element={el.element} />
            ))}
        </Routes>
    );
};

export default AppRoutes;