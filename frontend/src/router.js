import { createRouter, createWebHashHistory } from "vue-router";
import RegistrationPage from "./pages/RegistrationPage.vue";
import VotingPage from "./pages/VotingPage.vue";
import HomePage from "./pages/HomePage.vue";
import App from "./App.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/registration', component: RegistrationPage},
        {path: '/voting/:id', component: VotingPage}
    ]
})