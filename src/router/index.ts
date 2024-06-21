import {createRouter, createWebHistory} from 'vue-router'
import IndexView from "@/views/IndexView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: IndexView
        },
        {
            path: '/pokemon/:id',
            name: 'pokemon',
            props: true,
            component: () => import('@/views/DetailView.vue'),
        },
        {
            path: '/404',
            name: '404',
            component: () => import('@/views/NotFoundView.vue'),
        }

    ]
})

export default router
