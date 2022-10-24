<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>News App</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <div id="app">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: "App",
  components: {

  },
};
</script>
