<template>
  <div class="p-2 mt-2">
    <h2>Список пользователей</h2>
    <table class="table table-striped table-hover table-responsive caption-top">
      <caption>Общее количество: {{ users.length }}</caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Имя пользователя</th>
          <th scope="col">Полное имя</th>
          <th scope="col">Email</th>
          <th scope="col">Подтвержден</th>
          <th scope="col">Администратор</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='user in users' :key='user.id'>
          <td>
            <img v-if="user.avatar" alt='Avatar' :src="user.avatar" height="24">
          </td>
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
            <button type="button"
                    class="btn btn-sm"
                    :class="user.email_confirmed ? 'btn-outline-success' : 'btn-outline-warning'"
                    :disabled="user.email_confirmed">
              <i  class="bi"
                  :class="user.email_confirmed ? 'bi-check-lg' : 'bi-x-lg'">
              </i>
            </button>
          </td>
          <td>
            <button type="button"
                    class="btn btn-sm"
                    :class="user.admin ? 'btn-outline-success' : 'btn-outline-dark'"
                    :disabled="user.id === currentUserId">
              <i  class="bi"
                  :class="user.admin ? 'bi-check-lg' : 'bi-x-lg'">
              </i>
            </button>
          </td>
          <td>
            <button v-if="user.id != currentUserId"
                    type="button"
                    class="btn btn-sm btn-link link-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteUser"
                    @click="userForRemove = user">
              <i class="bi bi-trash-fill places-action" ></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <ModalDialogue  title='Вы действительно хотите удалить пользователя?'
                  body='Следующий пользователь будет удален без возможности восстановления'
                  :itemName='userForRemove.fullname'
                  acceptButtonText='Удалить'
                  acceptButtonClass='btn-danger'
                  @accept-event="deleteUser(userForRemove.id)"
                  @cancel-event="userForRemove = {}"
                  id='deleteUser'>
  </ModalDialogue>
</template>

<script>
import ModalDialogue from '@/components/ModalDialogue.vue';

export default {
  data() {
    return {
      userForRemove: {},
    };
  },
  computed: {
    users() {
      return this.$store.getters['users/users'];
    },
    currentUserId() {
      return this.$store.getters['authorization/user'].id;
    },
  },
  methods: {
    deleteUser(userId) {
      this.$store.dispatch('users/deleteUser', userId)
        .then(() => this.$toast.success('Пользователь успешно удален'));
    },
  },
  mounted() {
    this.$store.dispatch('users/fetchUsers');
  },
  components: {
    ModalDialogue,
  },
};
</script>

<style scoped lang='scss'>
</style>
