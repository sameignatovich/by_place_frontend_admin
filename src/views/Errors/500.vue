<template>
  <div class="message-box">
    <div class="message-content">
        <h1 class="display-6">Сервер перегружен или находится на обслуживании.</h1>
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <h1 class="display-6">Пожалуйста, попробуйте зайти еще раз позже.</h1>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
.message-box {
  position: absolute;
  height: 99%;
  width: 99%;

  .message-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    min-width: 350px;
  }
}
</style>
