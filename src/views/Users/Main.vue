<template>
  <div class="p-2 mt-2">
    <h2>Список пользователей</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Имя пользователя</th>
          <th scope="col">Полное имя</th>
          <th scope="col">Email</th>
          <th scope="col">Подтвержден?</th>
          <th scope="col">Администратор?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='user in users' :key='user.id'>
          <td>
            {{ user.username }}
          </td>
          <td>
            {{ user.fullname }}
          </td>
          <td>
            {{ user.email }}
          </td>
          <td>
            <i :class="user.email_confirmed ? 'bi bi-check-lg' : 'bi bi-x-lg'"></i>
          </td>
          <td>
            <i :class="user.admin ? 'bi bi-check-lg' : 'bi bi-x-lg'"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters['users/users'];
    },
  },
  mounted() {
    this.$store.dispatch('users/fetchUsers');
  },
};
</script>

<style scoped lang='scss'>
  .bi-x-lg {
    color: red;
  }

  .bi-check-lg {
    color: green;
  }
</style>
