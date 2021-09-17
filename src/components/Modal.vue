<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="title">
              Default title
            </slot>
          </h5>
        </div>
        <div class="modal-body">
          <p>
            <slot name="body">
              Default Body
            </slot>
          </p>
        </div>
        <div class="modal-footer">
          <slot name="footer">
              <button @click="$emit('close')"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal">
                Close
              </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang='scss'>

</style>
