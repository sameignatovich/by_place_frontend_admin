<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <i class="bi bi-house-fill me-2" ></i>
            Панель управления
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link">
            <i class="bi bi-people-fill me-1" ></i>
            Пользователи
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/places" class="nav-link">
            <i class="bi bi-shop me-1" ></i>
            Места
          </router-link>
        </li>
        <hr>
        <li class="dropdown nav-item">
          <a  href="#"
              class="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
              aria-expanded="false">
            <img :src='user.avatar' alt="" width="32" height="32" class="rounded-circle me-2">
            <strong>{{ user.fullname }}</strong>
          </a>
          <ul class="dropdown-menu text-small shadow"
              aria-labelledby="dropdownUser">
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a v-on:click='signout' class="dropdown-item" href="#">Выйти</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters['authorization/user'];
    },
  },
  methods: {
    signout() {
      this.$store.dispatch('authorization/signout')
        .then(() => {
          this.$toast.success('Вы успешно вышли из системы', { position: 'top' });
          this.$router.push('/');
        });
    },
  },
};
</script>

<style scoped lang="scss">
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);

    .nav-link {
      font-weight: 500;
      color: #333;
    }

    .nav-link.active {
      color: #2470dc;
    }
  }
</style>
