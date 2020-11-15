<template>
  <nav>
    <v-app-bar
      app
      color="blue darken-4"
      dark
      flat
      extended
      class="py-5"
    >
      <div
        class="d-flex flex-column"
      >
        <h1
          class="font-weight-black text-uppercase amber--text"
        >
          News <span class="font-weight-light">App</span>
        </h1>
        <span class="subheading">Keep up with breaking news</span>
      </div>

      <v-spacer />

      <v-app-bar-nav-icon
        class="amber--text"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class="blue darken-4"
    >
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
