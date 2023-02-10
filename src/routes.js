import VueRouter from 'vue-router';
import HomePage from "./components/HomePage.vue";
import MoviePage from "./components/movies/MoviePage.vue";

let router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/movie/:id",
            name: "movie",
            component: MoviePage,
        },
    ]
});

export default router;