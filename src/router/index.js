import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import SelectTemplate from "@/views/SelectTemplate.vue";
import Stats from "@/views/Stats.vue";

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/step1',
        name: "SelectTemplate",
        component: SelectTemplate
    },
    {
        path: '/step2',
        name: "Stats",
        component: Stats
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;