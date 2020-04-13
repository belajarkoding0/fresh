<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="signin">
                  <v-text-field
                    v-model="form.email"
                    label="Enter your email"
                    name="Email"
                    prepend-icon="fas fa-envelope"
                    type="text"
                    :rules="emailRules"
                    required
                  />
                  <v-text-field
                    id="password"
                    v-model="form.password"
                    label="Password"
                    name="password"
                    prepend-icon="fa fa-lock"
                    type="password"
                    required
                  />
                  <v-card-actions>
                    <v-btn block color="primary" type="submit">Login</v-btn>
                  </v-card-actions>
                  <v-card-text>
                    New to this website?
                    <router-link to="/register">Create an account.</router-link>
                  </v-card-text>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import AuthService from "../services/AuthService";
import { mapActions } from "vuex";

export default {
  name: "signin",
  components: {},
  data: () => ({
    form: {
      email: "",
      password: ""
    },
    valid: false,
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    ...mapActions({
      signIn: "auth/signIn"
    }),
    signin() {
      this.signIn(this.form)
        .then(() => {
          this.$router.replace({
            name: "dashboard"
          });
        })
        .catch(() => {
          console.log("failed");
        });
    }
  }
};
</script>
