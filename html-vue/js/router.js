import Index from './page/Index.js'

const {createRouter, createWebHashHistory} = VueRouter

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;