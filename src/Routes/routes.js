import Following from '~/Pages/Following/Following';
import Home from '~/Pages/Home';

const publicRoutes = [
    //format {path: 'path', page: PageName, layout: null/Home/empty is DefaultLayout}
    { path: '/', page: Home },
    { path: '/following', page: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
