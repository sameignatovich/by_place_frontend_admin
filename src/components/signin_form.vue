<template>
<main class="form-signin">
  <form>
    <div class="text-center">
      <img class="mb-4" src="@/assets/images/logo.png" alt="logo" height="57">
      <h1 class="h3 mb-3 fw-normal">Форма входа</h1>
    </div>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Электронная почта</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
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
  name: 'SigninForm',
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
