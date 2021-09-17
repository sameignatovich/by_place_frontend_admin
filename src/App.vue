<template>
  <Loader v-if='loading' />

  <Header v-if='authorized' />

  <div v-if='authorized' class="container-fluid">
    <div class="row">
      <Sidebar/>
      <main class='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <router-view/>
      </main>
    </div>
  </div>

  <div v-else>
    <router-view/>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import Header from '@/components/Header.vue';
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
    Loader,
    Header,
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
</style>
