import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
    // {
    //     path: "/",
    //     name: "Home",
    //     component: Home
    // },
    {
        path: "/home",
        name: "home",
        // redirect: "/",
        component: resolve => require(["@/views/layout/home.vue"], resolve),
        children: [
            {
                path: "/",
                component: resolve =>
                    require(["@/views/table/index.vue"], resolve)
            }
        ]
    },
    {
        path: "/",
        name: "login",
        component: resolve => require(["@/views/login/login.vue"], resolve)
    },
    {
        path: "/class",
        name: "class",
        component: resolve => require(["@/views/class/class.vue"], resolve)
    }

    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
