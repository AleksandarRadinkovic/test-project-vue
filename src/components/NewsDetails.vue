<template>
  <div>
    <v-btn text @click="$router.go(-1)" class="ma-4" small>
      <v-icon left>mdi-chevron-left</v-icon>
      <span>Back</span>
    </v-btn>
    <v-container>
      <v-row>
        <template >
          <v-col cols="12">
            <h2  class="text-h3">{{ title }}</h2>
            <v-spacer></v-spacer>

            <div class="text-body-2">{{ body }}</div>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewsDetails",
  data() {
    return {
        title: "",
        body: "",
    };
  },
  async mounted() {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/`+this.$route.params.id);
    this.title = result.data.title;
    this.body = result.data.body;
  },
};
</script>
