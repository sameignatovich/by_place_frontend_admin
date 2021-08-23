<template>
  <div class="p-2 mt-2">
    <h2>Список мест</h2>
    <table class="table table-striped table-hover caption-top">
      <caption>Общее количество: {{ places.length }}</caption>
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">URI</th>
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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    places() {
      return this.$store.getters['places/places'];
    },
  },
  mounted() {
    this.$store.dispatch('places/fetchPlaces');
  },
};
</script>

<style scoped lang='scss'>
</style>
