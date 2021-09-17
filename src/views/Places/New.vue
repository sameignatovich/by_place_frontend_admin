<template>
  <div class='p-2 mt-2'>
    <h2 class='text-center mb-3'>Создать место</h2>
    <form @submit.prevent='newPlace'>
      <div class='mb-3 row'>
        <label for='name' class='col-md-2 col-form-label'>Название</label>
        <div class='col-md-10'>
          <input v-model='name' type='text' class='form-control' id='name'>
        </div>
      </div>
      <div class='mb-3 row'>
        <label for='uri' class='col-md-2 col-form-label'>URI</label>
        <div class='col-md-10'>
          <input v-model='uri' type='text' class='form-control' id='uri'>
        </div>
      </div>
      <div class='mb-3 row'>
        <div class='col-md-10 offset-md-2'>
          <button type='submit' class='btn btn-primary'>Сохранить</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      uri: '',
    };
  },
  methods: {
    newPlace() {
      const placeData = {
        place: {
          name: this.name,
          uri: this.uri,
        },
      };

      this.$store.dispatch('places/newPlace', placeData)
        .then(() => {
          this.$toast.success('Новое место успешно создано');
          this.$router.push('/places');
        })
        .catch(() => {
          this.$toast.error('Ошибка при сохранении данных');
        });
    },
  },
};
</script>

<style scoped lang='scss'>
</style>
