<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Fresh</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <template v-if="authenticated">
            <router-link :to="{name: 'dashboard'}" class="nav-item nav-link">Dashboard</router-link>
            <a href="#" class="nav-item nav-link" @click="signout">Sign out</a>
            <span class="navbar-text">{{ user.name }}</span>
          </template>
          <template v-else>
            <router-link :to="{name: 'home'}" class="nav-item nav-link">Home</router-link>
            <router-link :to="{name: 'signin'}" class="nav-item nav-link">Sign in</router-link>
          </template>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  },
  methods: {
    ...mapActions({
      signOut: "auth/signOut"
    }),
    signout() {
      this.signOut().then(() => {
        this.$router.replace({
          name: "home"
        });
      });
    }
  }
};
</script>