<template>
  <div class="p-2 mt-2">
    <h2>Список мест</h2>
    <table class="table table-striped table-hover table-responsive caption-top">
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
            <button type="button"
                    class="btn btn-sm btn-link link-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deletePlace"
                    @click="placeForRemove = place">
              <i class="bi bi-trash-fill places-action" ></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <ModalDialogue  title='Вы действительно хотите удалить заведение?'
                  body='Следующее заведение будет удалено без возможности восстановления'
                  :itemName='placeForRemove.name'
                  acceptButtonText='Удалить'
                  acceptButtonClass='btn-danger'
                  @accept-event="deletePlace(placeForRemove.id)"
                  @cancel-event="placeForRemove = {}"
                  id='deletePlace'>
  </ModalDialogue>
</template>

<script>
import ModalDialogue from '@/components/ModalDialogue.vue';

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
    ModalDialogue,
  },
};
</script>

<style scoped lang='scss'>
</style>
