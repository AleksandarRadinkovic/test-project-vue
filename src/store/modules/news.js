import axios from "axios";

const state = {
  news: [],
};

const getters = {
  allNews: (state) => {
    return state.news;
  },
};

const actions = {
  async getNews({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("setNews", response.data);
  },

  async addNews({ commit }, { title, body }) {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      { title: title, body: body }
    );
    commit("addNews", response.data);
  },

  async deleteNews({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    commit("removeNews", id);
  },
};

const mutations = {
  setNews: (state, news) => (state.news = news),
  addNews: (state, newItem) => state.news.unshift(newItem),
  removeNews: (state, id) =>
    (state.news = state.news.filter((item) => item.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
