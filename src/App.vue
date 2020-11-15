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
    <Footer />
  </v-app>
</template>

<script>
import ApiClient from './services/ApiService';
import Navbar from './components/Navbar.vue';
import ArticleCard from './components/ArticleCard.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  data: () => ({
    articles: [],
  }),
  components: {
    Navbar,
    ArticleCard,
    Footer,
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
