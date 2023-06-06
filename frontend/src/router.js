import { createRouter, createWebHashHistory } from "vue-router";

import CreateVotingPage from "./pages/CreateVotingPage.vue";
import DashboardPage from "./pages/DashboardPage.vue";
import RegistrationPage from "./pages/RegistrationPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import VotingPage from "./pages/VotingPage.vue";
import HomePage from "./pages/HomePage.vue";
import App from "./App.vue";

const router =  createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/create-account', component: RegistrationPage},
        {path: '/voting/:id', component: VotingPage},
        {path: '/login', component: LoginPage},
        {path: '/dashboard', component: DashboardPage},
        {path: '/create-voting', component: CreateVotingPage}
    ]
});

router.beforeEach((to, from, next) => {
    const hasUser = localStorage.getItem('user');
  
    if (to.path === '/' && hasUser) {
      next({ path: '/dashboard' }); // Redirect to '/dashboard' route
    } else {
      next(); // Continue with the navigation
    }
  });


export default router;