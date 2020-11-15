<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <v-row>
          <ArticleCard
            v-for="(article, index) in articles"
            :key="index"
            :article="article"
          />
        </v-row>
      </v-container>
    </v-main>
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
  </v-app>
</template>

<script>
import ApiClient from './services/ApiService';
import Navbar from './components/Navbar.vue';
import ArticleCard from './components/ArticleCard.vue';

export default {
  name: 'App',
  data: () => ({
    articles: [],
  }),
  components: {
    ArticleCard,
    Navbar,
  },
  created() {
    try {
      ApiClient.getArticles().then((res) => {
        this.articles = res.data.response.results;
      });
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  },
};
</script>
