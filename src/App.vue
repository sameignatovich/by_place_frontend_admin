<template>
  <div v-if="authorized">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>

  <div v-else>
    <SigninForm/>
  </div>
</template>

<script>
import SigninForm from '@/components/signin_form.vue';

export default {
  computed: {
    authorized() {
      return this.$store.getters['user/isAuthorized'];
    },
  },
  components: {
    SigninForm,
  },
};
</script>

<style scoped lang="scss">
</style>
