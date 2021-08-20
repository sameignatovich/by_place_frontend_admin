<template>
  <nav class="flex-column p-3 text-white bg-dark">
    <router-link to="/"
        class="d-flex align-items-center mb-3 mb-md-0
              me-md-auto text-white text-decoration-none">
      <img alt="Vue logo" width="40" class="me-2" src="@/assets/images/logo.png">
      <span class="fs-4">By Place</span>
    </router-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link active" aria-current="page">
          <i class="bi bi-house-fill me-2" ></i>
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link text-white">
          <i class="bi bi-people-fill me-2" ></i>
          Users
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/places" class="nav-link text-white">
          <i class="bi bi-shop me-2" ></i>
          Places
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link text-white">
          <i class="bi bi-info-circle-fill me-2" ></i>
          About
        </router-link>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a  href="#"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false">
        <img :src='user.avatar' alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>{{ user.fullname }}</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a v-on:click='signout' class="dropdown-item" href="#">Выйти</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters['user/user'];
    },
  },
  methods: {
    signout() {
      this.$store.dispatch('user/signout');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
