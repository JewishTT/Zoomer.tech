import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "../../pages/MainPage.vue";
import ProfilePage from "../../pages/ProfilePage.vue";
import Chat from "../../pages/Chat.vue";
import HelpPage from "../../pages/HelpPage.vue";
import Settings from '../../pages/Settings.vue';
import ChatList from "../../pages/ChatList.vue";
import Articles from "../../pages/Articles.vue";
import ArticlePage from "../../pages/ArticlePage.vue";
import Admin from "../../entities/Admin/Admin.vue";
import Login from "../../features/authByUsername/Login.vue";
import ErrorPage from '../../pages/ErrorPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: "Home",
        component: MainPage,
    },
    {
        path: '/profile',
        name: "Profile",
        component: ProfilePage,
    },
    {
        path: '/help',
        name: "HelpPage",
        component: HelpPage,
    },
    {
        path: '/chat',
        name: "Chat",
        component: Chat,
    },
    {
        path: '/settings',
        name: "Settings",
        component: Settings,
    },
    {
        path: '/chatlist',
        name: "ChatList",
        component: ChatList,
    },
    {
        path: '/articles',
        name: "Articles",
        component: Articles,
    },
    {
        path: '/articles/:id',
        name: 'ArticlePage',
        component: ArticlePage,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('user');
    console.log(`Navigating to ${to.path}, Authenticated: ${isAuthenticated}`);

    const protectedRoutes = ['/profile', '/admin']; // Add more routes if needed

    if (protectedRoutes.includes(to.path) && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;
