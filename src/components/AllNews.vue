<template>
  <v-container>
    <v-row align="center" justify="space-between">
      <AddNews style="padding-top: 10px" />
      <v-btn depressed color="error" v-on:click="logOut"> Log Out </v-btn>
    </v-row>

    <v-row>
      <template>
        <v-col v-for="(news, index) in allNews" cols="4" :key="index">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 8 : 2}`"
              style="cursor: pointer"
            >
              <div
                class="cover-image"
                :style="{ background: `url(${prevImage})` }"
              ></div>
              <div class="pa-4">
                <h2
                  @click="$router.push(`/news/${news.id}/`).catch(() => {})"
                  class="text-h5 mb-2"
                >
                  {{ news.title }}
                </h2>
                <div class="body-2">{{ news.body }}</div>
              </div>
              <div>
                <v-row
                  style="padding-bottom: 10px"
                  align="center"
                  justify="space-around"
                >
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    v-on:click="deleteNews(news.id)"
                  ></i>
                  <i
                    class="fa fa-edit"
                    aria-hidden="true"
                    @click="$router.push(`/update/${news.id}/`).catch(() => {})"
                  ></i>
                </v-row>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import AddNews from "./AddNews.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AddNews,
  },
  name: "AllNews",
  data: () => ({
    prevImage: require("../assets/news-prev.png"),
  }),
  methods: {
    ...mapActions(["getNews", "deleteNews"]),
    logOut() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
  computed: mapGetters(["allNews"]),
  created() {
    this.getNews();
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>
.cover-image {
  height: 200px;
  background-size: cover !important;
}
</style>
