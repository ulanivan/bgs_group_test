<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>User Info</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-btn small color="success" class="mr-3">
        <nuxt-link style="color: #ffffff; text-decoration: none;" to="/">
          Home Page
        </nuxt-link>
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
import { mapActions } from "vuex";

export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  methods: {
    logout() {
      this.$router.push("/");
      this.logoutUser();
    },
    ...mapActions({
      logoutUser: "user/logout",
    }),
  },
};
</script>
