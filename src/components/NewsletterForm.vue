<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-12">
    <div class="newsletter" style="margin-top: 25px;">
      <b-button class="btn-cta" v-b-modal.modal-news>Newsletter bestellen</b-button>

      <b-modal id="modal-news" title="News">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { BModal } from "bootstrap-vue";
export default {
  components: {
    BModal
  }
};
</script>

<style>
</style>