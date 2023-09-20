import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import UserProfile from '../components/UserProfile.vue'
import Sidebar from '../components/Sidebar.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/', 
        name: 'home',
        components: {
            default: Home,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/user/:username',
        name: 'user',
        components: {
            default: UserProfile,
            LeftSideBar: Sidebar
        },
        
    },
    
    { 
    path: '/:pathMatch(.*)*', 
    name: 'notfound',
    components: {
        default: NotFound,
        LeftSideBar: Sidebar
    },
    
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router