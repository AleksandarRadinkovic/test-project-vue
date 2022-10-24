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
      path: "/news/:id/show",
      name: "news_details",
      component: () => import("@/components/NewsDetails.vue"),
    },
    {
      path: "/news/LogIn",
      name: "login",
      component: () => import("@/components/LogIn.vue"),
    },

  ],
});
