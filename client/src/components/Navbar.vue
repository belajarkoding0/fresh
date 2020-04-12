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
          <router-link :to="{name: 'home'}" class="nav-item nav-link">Home</router-link>
          <router-link :to="{name: 'signin'}" class="nav-item nav-link">Sign in</router-link>
          <router-link :to="{name: 'dashboard'}" class="nav-item nav-link">Dashboard</router-link>
          <a class="nav-item nav-link" href="#">Sign out</a>
        </div>
      </div>
    </nav>
  </div>
</template>