<template>
  <Loader/>

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
import Loader from '@/components/Loader.vue';
import SigninForm from '@/components/SigninForm.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  computed: {
    authorized() {
      return this.$store.getters['authorization/isAuthorized'];
    },
  },
  components: {
    Loader,
    SigninForm,
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
</style>
