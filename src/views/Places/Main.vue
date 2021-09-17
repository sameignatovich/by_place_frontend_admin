<template>
  <div class="p-2 mt-2">
    <h2>Список мест</h2>
    <table class="table table-striped table-hover caption-top">
      <caption>
        Общее количество: {{ places.length }}
        <router-link to="/places/new" class='btn btn-sm btn-success'>
          <i class="bi bi-plus" ></i>
        </router-link>
      </caption>
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">URI</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='place in places' :key='place.id'>
          <td>
            {{ place.name }}
          </td>
          <td>
            {{ place.uri }}
          </td>
          <td>
            <a  href="#deleteModal"
                data-bs-toggle="modal"
                class='link-danger'
                @click="placeForRemove = place" >
              <i class="bi bi-trash-fill places-action" ></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <Modal id='deleteModal'>
    <template v-slot:title>
      Вы действительно хотите удалить заведение?
    </template>
    <template v-slot:body>
      Заведение
      <b>{{ placeForRemove.name }}</b>
      будет удалено без возможности восстановления
    </template>
    <template v-slot:footer>
      <button @click="placeForRemove = {}"
              class="btn btn-secondary"
              data-bs-dismiss="modal">
        Отменить
      </button>
      <button @click="deletePlace(placeForRemove.id)"
              class="btn btn-danger"
              data-bs-dismiss="modal">
        Удалить
      </button>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  data() {
    return {
      placeForRemove: {},
    };
  },
  computed: {
    places() {
      return this.$store.getters['places/places'];
    },
  },
  methods: {
    deletePlace(placeId) {
      this.$store.dispatch('places/deletePlace', placeId)
        .then(() => this.$toast.success('Место успешно удалено'));
    },
  },
  mounted() {
    this.$store.dispatch('places/fetchPlaces');
  },
  components: {
    Modal,
  },
};
</script>

<style scoped lang='scss'>
</style>
