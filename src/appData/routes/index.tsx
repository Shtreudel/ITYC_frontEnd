import { RouteObject } from 'react-router-dom';

import Welcome from '../../views/Welcome';
import Home from '../../views/Home';

const routesConfig: RouteObject[] = [
    {
        element: <Welcome />,
        path: '/'
    },
    {
        element: <Home />,
        path: '/home'
    }
];


export default routesConfig;