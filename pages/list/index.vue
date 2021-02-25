<template>
  <div>
    <v-container>
      <v-row v-if="!loader">
        <v-col
          sm="6"
          md="4"
          xl="2"
          cols="6"
          v-for="item in list.data"
          :key="item.id"
        >
          <v-card class="mx-auto my-12" max-width="374">
            <v-img height="250" :src="item.avatar" />

            <v-card-title>{{
              `${item.first_name} ${item.last_name}`
            }}</v-card-title>

            <v-card-text>
              {{ item.email }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="list.total_pages > 1 && !loader">
        <v-pagination v-model="page" :length="list.total_pages" />
      </v-row>
    </v-container>
    <v-overlay class="overlay" :value="loader">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  layout: "lk",
  middleware: ["auth"],
  asyncData({ query }) {
    return {
      page: Number(query.page) || 1,
    };
  },
  data() {
    return {
      delay: 3,
    };
  },
  computed: {
    ...mapGetters({
      list: "list/list",
      loader: "list/loader",
    }),
    listParams() {
      return { delay: this.delay, page: this.page };
    },
  },
  watch: {
    page(value) {
      this.$router.push(`/list?page=${value}`);
      this.fetchList(this.listParams);
    },
  },
  methods: {
    ...mapActions({
      fetchList: "list/fetchList",
    }),
  },
  mounted() {
    this.fetchList(this.listParams);
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
}
</style>