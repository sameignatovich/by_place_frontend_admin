<!--
  <ModalDialogue  title='Modal title here'
                  body='Message in modal body'
                  :itemName='someItem.name'
                  acceptButton='Save'
                  acceptButtonClass='btn-success'
                  @accept-event="someEvent(item.id)"
                  @cancel-event="item = {}"
                  id='saveItem'>
  </ModalDialogue>
-->

<template>
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ this.title }}
          </h5>
        </div>
        <div class="modal-body">
          <p>{{ this.body }}:</p>
          <p><b>{{ this.itemName }}</b></p>
        </div>
        <div class="modal-footer">
          <button @click="this.$emit('cancelEvent')"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal">
            Отменить
          </button>
          <button @click="this.$emit('acceptEvent')"
                  class="btn"
                  :class='acceptButtonClass'
                  data-bs-dismiss="modal">
            {{ acceptButtonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    itemName: String,
    acceptButtonText: String,
    acceptButtonClass: String,
  },
};
</script>

<style scoped lang='scss'>

</style>
