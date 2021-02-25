<template>
  <v-app>
    <div class="d-flex flex-column justify-center login-form-container">
      <v-container>
        <v-row>
          <v-spacer />
          <login-form />
          <v-spacer />
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.login-form-container {
  height: 100vh;
}
</style>
