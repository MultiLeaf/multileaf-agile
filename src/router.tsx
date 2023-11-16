import { RouteObject } from "react-router-dom";
import { HomePage } from "./pages/Home";
import MainLayout from "./components/MainLayout/MainLayout.component";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
];
export default routes;
