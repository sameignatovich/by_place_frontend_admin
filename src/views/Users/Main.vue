<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Full name</th>
          <th scope="col">Email</th>
          <th scope="col">Confirmed?</th>
          <th scope="col">Admin?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='user in users' :key='user.id'>
          <th scope="row">{{ user.id }}</th>
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
