import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/home/Page";
import { MoviePage } from "../Pages/MoviePage/Page";
import { NotFound } from "../Pages/NotFound/Page";

export const MainRoutes = () => {
    
    return useRoutes([
        { path: '/', element: <Home />},
        { path: '/:id', element: <MoviePage />},
        { path: '*', element: <NotFound />},
        // {path: 'photo/:id', element: <Image />},
        
    ])
}