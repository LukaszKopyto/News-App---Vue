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
      <v-list>
        <v-subheader class="blue--text justify-center">
          MENU
        </v-subheader>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon color="blue darken-2">
              {{ link.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-new-box', text: 'Newest articles', route: '/' },
        { icon: 'mdi-newspaper-variant-outline', text: 'Politics', route: '/politics' },
        { icon: 'mdi-newspaper-variant-outline', text: 'Sport', route: '/sport' },
        { icon: 'mdi-newspaper-variant-outline', text: 'Business', route: '/business' },
        { icon: 'mdi-bookmark', text: 'Articles for later', route: '/articles-for-later' },
      ],
    };
  },
};
</script>
