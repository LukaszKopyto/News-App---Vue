<template>
  <v-app-bar
    app
    color="blue darken-4"
    dark
    flat
    extended
    class="d-flex align-center"
  >
    <div class="d-flex flex-column">
      <h1
        class="font-weight-black text-uppercase amber--text"
        :style="$vuetify.breakpoint.xs && {'font-size': '1.5rem'}"
      >
        News App
      </h1>
      <span class="subheading">Keep up with breaking news</span>
    </div>

    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {

};
</script>
