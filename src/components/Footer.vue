<template>
  <v-footer
    color="blue darken-4"
    dark
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
        class="d-flex flex-column justify-center align-center"
      >
        <strong class="mt-4">News App {{ new Date().getFullYear() }}</strong>
        <p class="caption text-uppercase">
          Keep up with breaking news
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {

};
</script>
