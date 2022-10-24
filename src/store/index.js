import Vuex from "vuex";
import Vue from "vue";
import news from "./modules/news";

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    news,
  },
});
