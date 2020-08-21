import Vue from 'vue';
import VueRouter from 'vue-router';

import userRouter from './user.router';

Vue.use(VueRouter);

const routes = [
    ...userRouter,
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    next();
});
export default router;
