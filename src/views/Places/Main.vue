<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Uri</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='place in places' :key='place.id'>
          <th scope="row">{{ place.id }}</th>
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
