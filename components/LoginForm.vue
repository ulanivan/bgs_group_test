<template>
  <div style="min-width: 50%">
    <v-card>
      <v-card-title>
        Login form
      </v-card-title>
      <v-card-text>
        <form>
          <v-text-field
              v-model="login"
              :error-messages="loginErrors"
              label="Login"
              required
              @input="$v.login.$touch()"
              @blur="$v.login.$touch()"
          ></v-text-field>
          <v-text-field
              v-model="password"
              :error-messages="passwordErrors"
              label="Password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
          ></v-text-field>
          <v-btn class="mr-4 mt-2"
                 color="success"
                 @click="submit"
          >Login
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
    <v-alert v-if="wrongLoginOrPassword.length > 0"
             type="error"
             class="mt-3"
    >
      Wrong Login or Password
    </v-alert>
  </div>
</template>

<script>
import { users } from '../fakeData'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      login: '',
      password: '',
      wrongLoginOrPassword: [],
    }
  },
  validations: {
    login: { required },
    password: {
      required,
    },
  },
  computed: {
    loginErrors () {
      const errors = []
      if (!this.$v.login.$dirty) return errors
      !this.$v.login.required && errors.push('Login is required.')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
  },
  methods: {
    getUser() {
      return users.find(user => user.login === this.login)
    },
    submit() {
      if (this.$v.$invalid) {
        return
      }
      const user = this.getUser()
      if (!user || user.password !== this.password) {
        this.wrongLoginOrPassword.push('Wrong Login or Password')
        return
      }

      this.$store.dispatch('user/login', user)
      this.$router.push({ path: `/user/${user.id}`})
    },
  },
}
</script>
