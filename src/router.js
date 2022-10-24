import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/components/AllNews.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/components/LogIn.vue"),
    },
    {
      path: "/news/:id/",
      name: "news_details",
      component: () => import("@/components/NewsDetails.vue"),
    }
  ],
});
