import  MainLayout from 'src/layouts/MainLayout';
import {RegisterLayout} from '../layouts/RegisterLayout';
import { useRoutes } from 'react-router-dom';
import { Home } from 'src/pages';
// import App from '../layouts/cart'
function useRouteElements() {
    const routeElements = useRoutes([
        {
            path: '/',
            element: (
                <MainLayout>
                    <Home />
                </MainLayout>
            )
        },
        {
            path: 'login',
            element: <RegisterLayout></RegisterLayout>
        },
        {
            path: 'register',
            element: <RegisterLayout></RegisterLayout>
        },
        // {
        //     path: 'cart',
        //     element: <App/>
        // }
    ]);
    return routeElements;
}

export default useRouteElements;
