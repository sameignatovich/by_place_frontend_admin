<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <router-link to="/" class="navbar-brand col-md-3 col-lg-2 me-0 px-3">
       <img alt="Vue logo" width="40" src="@/assets/images/logo.png">
       Soligorsk Place
    </router-link>
    <button class="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!--<div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="#">Sign out</a>
      </div>
    </div>-->
  </header>
</template>

<script>

</script>

<style scoped lang="scss">
  .navbar .navbar-toggler {
    top: .25rem;
    right: 1rem;
  }
</style>
