<template>
  <loader v-if='loading'
          object="#ffffff"
          color1="#ff2600"
          color2="#ffffff"
          size="5"
          speed="2"
          bg="#343a40"
          objectbg="#999793"
          opacity="80"
          name="circular">
  </loader>

  <div v-if='authorized' class='container-fluid p-0 row'>
    <div class='col-md-3'>
      <Sidebar/>
    </div>
    <div class='col-md-9'>
      <router-view/>
    </div>
  </div>

  <main v-else>
    <SigninForm/>
  </main>
</template>

<script>
import SigninForm from '@/components/SigninForm.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    authorized() {
      return this.$store.getters['authorization/isAuthorized'];
    },
  },
  components: {
    SigninForm,
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
</style>
