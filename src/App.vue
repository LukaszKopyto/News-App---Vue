<template>
  <v-app>
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
  </v-app>
</template>

<script>
import ApiClient from './services/ApiService';
import ArticleCard from './components/ArticleCard.vue';

export default {
  name: 'App',
  data: () => ({
    articles: [],
  }),
  components: {
    ArticleCard,
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
