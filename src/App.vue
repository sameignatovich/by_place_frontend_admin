<template>
  <Loader v-if='loading' />
  <Maintenance v-if='maintenance' />

  <main v-else>
    <div v-if='authorized' class="container-fluid p-0 row">
      <div class='col-md-3'>
        <Sidebar/>
      </div>
      <div class='col-md-9'>
        <router-view/>
      </div>
    </div>
    <SigninForm v-else />
  </main>
</template>

<script>
import Loader from '@/components/Loader.vue';
import Maintenance from '@/views/Errors/500.vue';
import SigninForm from '@/components/SigninForm.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    maintenance() {
      return this.$store.getters.maintenance;
    },
    authorized() {
      return this.$store.getters['authorization/isAuthorized'];
    },
  },
  components: {
    Loader,
    SigninForm,
    Sidebar,
    Maintenance,
  },
};
</script>

<style scoped lang="scss">
</style>
