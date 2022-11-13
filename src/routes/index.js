//Layout
import { HeaderOnly } from '~/components/Layout';

//page
import Home from '~/pages/home';
import Upload from '~/pages/upload';
import Follow from '~/pages/follow';

const pubicRoute = [
    { path: '/', component: Home },
    { path: '/follow', component: Follow },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoute = [];

export { pubicRoute, privateRoute };
