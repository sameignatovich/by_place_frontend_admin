<template>
<main class='form-signin'>
  <form @submit.prevent='signin'>
    <div class='text-center'>
      <img class='mb-4' src='@/assets/images/logo.png' alt='logo' height='60'>
      <h1 class="h3 mb-3 fw-normal">Форма входа</h1>
    </div>

    <div class="form-floating">
      <input  v-model='email'
              type='email'
              class='form-control'
              id='floatingInput'
              placeholder='name@example.com'>
      <label for="floatingInput">Электронная почта</label>
    </div>
    <div class="form-floating">
      <input  v-model='password'
              type='password'
              class="form-control"
              id="floatingPassword"
              placeholder="Password">
      <label for="floatingPassword">Пароль</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">
      Войти
    </button>
    <p class="mt-5 mb-3 text-muted text-center">&copy; 2021 By Place</p>
  </form>
</main>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signin() {
      const signinData = {
        user: {
          email: this.email,
          password: this.password,
        },
      };

      this.$store.dispatch('authorization/signin', signinData)
        .then(() => {
          this.axios.defaults.headers.common.Authorization = `Bearer ${this.$store.getters['authorization/token']}`;
          this.$toast.success('Вы успешно вошли в систему', { position: 'top' });
          if (this.$route.query.redirect != null) {
            this.$router.push(this.$route.query.redirect);
          } else {
            this.$router.push('/');
          }
        })
        .catch(() => {
          this.$toast.error('Вы ввели неверную эл. почту или пароль', { position: 'top' });
          this.password = '';
        });
    },
  },
};
</script>

<style scoped lang="scss">
.form-signin {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;

  form {
    width: 100%;
    max-width: 350px;
    padding: 15px;
    margin: auto;
  }

  .form-floating:focus-within {
    z-index: 2;
  }

  input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>
