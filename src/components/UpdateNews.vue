<template>
  <div>
    <v-btn text @click="$router.go(-1)" class="ma-4" small>
      <v-icon left>mdi-chevron-left</v-icon>
      <span>Back</span>
    </v-btn>
    <v-container>
      <v-row>
        <template>
          <v-col cols="12">
            <v-textarea
              solo
              rows="2"
              name="input-7-4"
              label="Title"
              v-model="item.title"
              hint="Hint text"
            ></v-textarea>
            <v-textarea
              solo
              name="input-7-4"
              label="Title"
              v-model="item.body"
              hint="Hint text"
            ></v-textarea>
            <v-btn depressed color="primary" v-on:click="updateItem">
              Update News
            </v-btn>

            <v-spacer></v-spacer>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdateNews",
  data() {
    return {
      item: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    async updateItem() {
      const result = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/` + this.$route.params.id,
        {
          title: this.item.title,
          body: this.item.body,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/` + this.$route.params.id
    );
    this.item = result.data;
  },
};
</script>
