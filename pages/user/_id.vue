<template>
  <div v-if="user">
    <v-container fluid>
      <v-row>
        <v-col class="text-start">
          <p>Name: {{ user.name }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-start">
          <p>Email: {{ user.email }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-start">
          <p>Photo:</p>
          <img
            src="/images/photo.jpg"
            height="150px"
            width="150px"
            alt="photo"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  middleware: ["auth"],
  layout: "lk",
  computed: {
    ...mapGetters({
      user: "user/currentUser",
    }),
  },
};
</script>
