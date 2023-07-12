import { MainLayout, RegisterLayout } from 'src/layouts';
import { useRoutes } from 'react-router-dom';
import { Home } from 'src/pages';

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
        }
    ]);
    return routeElements;
}

export default useRouteElements;
