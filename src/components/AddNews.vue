<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mb-5" fab dark color="primary" v-bind="attrs" v-on="on">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 blue lighten-2">
          ADD NEW POST
        </v-card-title>

        <v-text-field v-model="title" required></v-text-field>
        <v-text-field v-model="body" required></v-text-field>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            class="mr-4"
            @click="
              onSubmit();
              dialog = false;
            "
          >
            Do It
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddNews",
  data() {
    return {
      title: "",
      body: "",
      dialog: false,
    };
  },
  methods: {
    ...mapActions(["addNews"]),
    onSubmit() {
      this.addNews(this.title, this.body);
      console.log(this.body);
      this.title = "";
      this.body = "";
    },
  },
};
</script>

<style scoped></style>
