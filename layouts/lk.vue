<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item-group v-model="selectedPage" color="primary">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>User Info</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>List</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-btn small color="success" class="mr-3">
        <nuxt-link class="home-page-link" to="/"> Home Page </nuxt-link>
      </v-btn>
      <v-btn @click="logout" small color="error">Logout</v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const pages = {
  "user-id": 0,
  list: 1,
};

export default {
  data: () => ({
    drawer: null,
    selectedPage: 0,
  }),
  computed: {
    ...mapGetters({
      user: "user/currentUser",
    }),
  },
  watch: {
    selectedPage(page) {
      const routes = {
        0: `/user/${this.$cookies.get("user").id}`,
        1: "/list",
      };
      this.$router.push(routes[page]);
    },
  },
  methods: {
    ...mapActions({
      logoutUser: "user/logout",
    }),
    logout() {
      this.$router.push("/");
      this.logoutUser();
    },
    initPageInMenu() {
      this.selectedPage = pages[this.$route.name] || 0;
    },
  },
  mounted() {
    this.initPageInMenu();
  },
};
</script>

<style scoped>
.home-page-link {
  color: #ffffff;
  text-decoration: none;
}
</style>
