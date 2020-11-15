<template>
  <v-col
    xs="12"
  >
    <v-card
      class="mx-auto"
      :style="$vuetify.breakpoint.md && {'display': 'flex'}"
      hover
    >
      <v-img
        height="300px"
        :src="image"
      />
      <div>
        <v-card-title>{{ title }}</v-card-title>
        <div class="d-flex flex-row-reverse justify-space-between align-center">
          <v-chip
            class="mx-4 text-uppercase"
            color="grey lighten-1"
            dark
            label
          >
            {{ category }}
          </v-chip>

          <v-card-subtitle class="pb-0 pt-0">
            {{ articleDate }}
          </v-card-subtitle>
        </div>
        <v-card-text class="text--primary">
          <div v-html="trailText" />
        </v-card-text>

        <v-card-actions>
          <v-hover>
            <template #default="{hover}">
              <v-btn
                color="blue"
                text
                outlined
                disabled
                :elevation="hover ? 10 : 0"
              >
                <v-icon left>
                  mdi-bookmark
                </v-icon>
                Read later
              </v-btn>
            </template>
          </v-hover>

          <v-spacer />

          <v-hover>
            <template #default="{hover}">
              <v-btn
                color="blue"
                text
                outlined
                :href="webUrl"
                target="_blank"
                :elevation="hover ? 10 : 0"
              >
                Read more...
              </v-btn>
            </template>
          </v-hover>
        </v-card-actions>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'ArticleCard',
  data: () => ({
    image: '',
    title: '',
    category: '',
    trailText: '',
    webUrl: '',
  }),
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    articleDate() {
      return this.article.webPublicationDate.substring(0, 10);
    },
  },
  created() {
    this.image = this.article.fields.thumbnail;
    this.title = this.article.webTitle;
    this.category = this.article.sectionName;
    this.trailText = this.article.fields.trailText;
    this.webUrl = this.article.webUrl;
  },
};
</script>
